import { create } from "zustand"

export type TAlert = {
    id?: number,
    message: string
}

const initialAlerts: TAlert[] = [
]

export const useAlertStore = create((set) => ({
    alerts: initialAlerts,
    addAlert: (alert: TAlert, duration: number) => {
        set((state) => ({
            alerts: [...state.alerts, alert]
        }));

        console.log('added')

        setTimeout(() => {
            set((state) => ({
                alerts: state.alerts.filter((a) => a.id !== alert.id)
            }));
        }, duration);
    },
    removeAlert: (id: number) => set((state) => ({
        alerts: state.alerts.filter((alert: TAlert) => alert.id !== id)
    }))
}));

