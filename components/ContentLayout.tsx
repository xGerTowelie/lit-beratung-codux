import { ReactNode } from "react";

export default function ContentLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-[300px] py-4 px-8 rounded-md shadow-black/20 shadow">
            {children}
        </div>
    )
}
