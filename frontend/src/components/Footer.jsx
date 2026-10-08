export default function Footer() {
  return (
    <footer className="mt-auto px-8 py-4 border-t border-slate-200 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
      <p>© 2025 WebFarm Software Agrícola Ltda. • Versão 2.4.0 (Enterprise)</p>
      <div className="flex items-center gap-4 text-slate-500">
        <a href="#ajuda" className="hover:text-[#237a32] transition-colors">
          Suporte ao Produtor
        </a>
        <span>•</span>
        <a href="#privacidade" className="hover:text-[#237a32] transition-colors">
          LGPD Agro
        </a>
        <span>•</span>
        <a href="#backup" className="hover:text-[#237a32] transition-colors">
          Backup Nuvem OK
        </a>
      </div>
    </footer>
  );
}
