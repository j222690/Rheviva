import { WHATSAPP_URL } from "@/lib/whatsapp";

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <div className="flex items-center gap-2.5 pl-3 pr-4 py-2 rounded-full border border-[color:var(--ink)]/10 bg-[color:var(--cream)]/70 backdrop-blur-xl shadow-[0_4px_20px_-8px_rgba(14,40,30,0.25)] transition-all duration-500 hover:border-[color:var(--gold)]/60 hover:bg-[color:var(--cream)]/90">
        <span className="grid place-items-center h-6 w-6 rounded-full bg-[color:var(--primary)]/90">
          <svg width="11" height="11" viewBox="0 0 24 24" className="text-[color:var(--cream)]" fill="currentColor">
            <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.59 5.93L0 24l6.41-1.68a11.78 11.78 0 0 0 5.63 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.43Zm-3.08 14.84c-.25.69-1.43 1.31-2 1.4-.51.08-1.16.11-1.87-.12-.43-.13-.98-.31-1.69-.62-2.98-1.29-4.93-4.29-5.08-4.49-.15-.2-1.22-1.62-1.22-3.08 0-1.46.77-2.18 1.04-2.48.27-.3.59-.37.79-.37l.57.01c.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.32.02.52-.1.2-.15.33-.3.5-.15.17-.32.38-.45.51-.15.15-.3.31-.13.61.17.3.77 1.27 1.65 2.05 1.14 1.02 2.1 1.33 2.4 1.48.3.15.47.13.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.08.12.08.71-.17 1.4Z" />
          </svg>
        </span>
        <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-[color:var(--ink)]/85">
          Falar agora
        </span>
      </div>
    </a>
  );
}
