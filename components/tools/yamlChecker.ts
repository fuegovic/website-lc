import * as fs from "fs";
import * as yaml from "js-yaml";
import Ajv from "ajv";

class yamlChecker {
  private ajv: Ajv;
  private schema: object;

  constructor(schema: object) {
    this.ajv = new Ajv();
    this.schema = schema;
  }

  public checkYamlFile(filePath: string): string {
    try {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const data = yaml.safeLoad(fileContents, {
        onWarning: (e) => {
          throw e;
        },
      });
      const valid = this.ajv.validate(this.schema, data);
      if (!valid) {
        return `Validation error: ${this.ajv.errorsText(this.ajv.errors)}`;
      }
      return "YAML is valid";
    } catch (e) {
      if (e.mark) {
        return `Parse error at Line: ${e.mark.line}, Column: ${e.mark.column}, Reason: ${e.reason}`;
      }
      return `Error: ${e.message}`;
    }
  }
}
