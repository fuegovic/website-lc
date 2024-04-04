import styles from './style.module.css'

export default function OptionTable({ options }: { options: [string, string, any] }) {
  return (
    <div
      className={
        '_mb-4 _mt-6 _overflow-x-auto _overscroll-x-contain _px-6 _pb-4 ' +
        styles.container
      }
    >
      <table className="_w-full _border-collapse _text-sm">
        <thead>
          <tr className="_py-4 _text-left _border-b _border-gray-100 dark:_border-gray-700">
            <th className="_py-2 _font-semibold">Option</th>
            <th className="_py-2 _pl-6 _font-semibold">Type</th>
            <th className="_px-6 _py-2 _font-semibold">Description</th>
          </tr>
        </thead>
        <tbody className="_align-baseline _text-gray-900">
          {options.map(([option, type, description]) => (
            <tr
              key={option}
              className="_py-4 _text-left _border-b _border-gray-100 dark:_border-gray-700"
            >
              <td className="_whitespace-pre _py-2 _font-mono _text-xs _font-semibold _text-primary-600 dark:_text-primary-600">
                {option}
              </td>
              <td className="_whitespace-pre _py-2 _pl-6 _font-mono _text-xs _font-semibold _text-gray-500 dark:_text-gray-400">
                {type}
              </td>
              <td className="_py-2 _pl-6 _text-slate-900 dark:_text-slate-100">{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}