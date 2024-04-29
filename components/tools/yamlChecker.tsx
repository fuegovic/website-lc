import React, { useState } from 'react'
import AceEditor, { IMarker } from 'react-ace'
import 'ace-builds/src-noconflict/mode-yaml'
import 'ace-builds/src-noconflict/theme-twilight'
import jsYaml from 'js-yaml'

function YAMLChecker() {
  const [yaml, setYaml] = useState('')
  const [validationResult, setValidationResult] = useState<{
    valid: boolean
    result?: string
    error?: string
  } | null>(null)
  const [errorLine, setErrorLine] = useState<number | null>(null)

  const validateYAML = (yamlContent: string) => {
    try {
      const result = jsYaml.load(yamlContent)
      setErrorLine(null) // No error
      return { valid: true, result: JSON.stringify(result, null, 2) }
    } catch (error) {
      let errorMessage = ''
      const line = error.mark?.line
      setErrorLine(line)
      if (error.reason === 'bad indentation of a mapping entry') {
        errorMessage = ` Incorrect indentation at line ${line + 1}. Each entry in YAML should be properly indented.`
      } else {
        errorMessage = ` ${error.reason} at line ${line + 1}`
      }
      return { valid: false, error: errorMessage }
    }
  }

  const handleValidation = () => {
    const result = validateYAML(yaml)
    setValidationResult(result)
  }

  const handleYamlChange = (newYaml: string) => {
    setYaml(newYaml)
  }

  const errorMarkers: IMarker[] =
    errorLine === null
      ? []
      : [
          {
            startRow: errorLine,
            endRow: errorLine,
            startCol: 0,
            endCol: Number.MAX_VALUE,
            type: 'text',
            className: 'error-marker', // Use className instead of style
          },
        ]

  return (
    <div>
      <AceEditor
        mode="yaml"
        theme="twilight"
        onChange={handleYamlChange}
        value={yaml}
        name="YAML_EDITOR"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          showLineNumbers: true,
          highlightActiveLine: false,
        }}
        markers={errorMarkers}
      />
      <button
        onClick={handleValidation}
        style={{
          backgroundColor: 'rgb(30, 163, 128)',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        Validate YAML
      </button>
      {validationResult &&
        (validationResult.valid ? (
          <pre>
            <br />
            YAML is valid!
            <br />
          </pre>
        ) : (
          <p>
            Error: {validationResult.error}
            {errorLine !== null && ` at line ${errorLine + 1}`}
          </p>
        ))}
    </div>
  )
}

export default YAMLChecker
