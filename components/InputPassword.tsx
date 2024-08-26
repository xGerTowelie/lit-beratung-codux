export default function InputPassword() {
    return (
        <label
            className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
            <input
                type="password"
                className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="Password"
            />

            <span
                className="px-2 pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
                Password
            </span>
        </label>
    )
}
