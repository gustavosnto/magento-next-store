export default function Footer() {
    return (
        <footer className="py-4 bg-slate-900 text-white">
            <div className="container">
                <p className="text-center">&copy; {process.env.STORE_NAME}. Desenvolvido por Gustavo Santos</p>
            </div>
        </footer>
    );
}