export default function Checkbox() {
  return (
    <fieldset>
      <legend className="sr-only">Checkboxes</legend>

      <div className="space-y-2">
        <label
          htmlFor="Option1"
          className="flex cursor-pointer items-start gap-4"
        >
          <div className="flex items-center">
            &#8203;
            <input
              type="checkbox"
              className="size-4 rounded border-gray-300"
              id="Option1"
            />
          </div>

          <div>
            <strong className="font-medium text-gray-900">
              {' '}
              John Clapton{' '}
            </strong>
          </div>
        </label>
      </div>
    </fieldset>
  )
}
