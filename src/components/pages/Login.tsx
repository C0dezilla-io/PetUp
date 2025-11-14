import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import logo from "../../assets/logo/logo-side-green.png";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/");
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/validators/login`, {
        email: email,
        senha: password,
      })
      .then((r) => {
        localStorage.setItem("token", r.data.token);
        localStorage.setItem("tipo_usuario", r.data.tipo_usuario);
        localStorage.setItem("userId", r.data.userId);
        navigate("/");
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-[var(--secondary-bg)] p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Logo PetUp" className="h-16 w-auto" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-[var(--text)]">
            Entre na sua conta
          </h2>
          <p className="mt-2 text-sm text-[var(--text)] opacity-70">
            Ou{" "}
            <Link
              to="/cadastro"
              className="font-medium text-[var(--highlight)] hover:opacity-80 transition-opacity duration-200"
            >
              crie uma nova conta
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-3 border border-[var(--border)] placeholder-[var(--text)] opacity-70 text-[var(--text)] bg-[var(--bg)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-all duration-200"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-3 border border-[var(--border)] placeholder-[var(--text)] opacity-70 text-[var(--text)] bg-[var(--bg)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent transition-all duration-200"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[var(--highlight)] focus:ring-[var(--highlight)] border-[var(--border)] rounded bg-[var(--bg)]"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-[var(--text)]"
              >
                Lembrar de mim
              </label>
            </div>
            <div className="text-sm">
              <Link
                to="/recuperar-senha"
                className="font-medium text-[var(--highlight)] hover:opacity-80 transition-opacity duration-200"
              >
                Esqueceu sua senha?
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="terms-login"
              name="terms-login"
              type="checkbox"
              required
              className="h-4 w-4 text-[var(--highlight)] focus:ring-[var(--highlight)] border-[var(--border)] rounded bg-[var(--bg)]"
            />
            <label
              htmlFor="terms-login"
              className="ml-2 block text-sm text-[var(--text)]"
            >
              Eu concordo com os{" "}
              <Link
                to="/termos"
                className="text-[var(--highlight)] hover:opacity-80 transition-opacity duration-200"
              >
                Termos de Serviço
              </Link>{" "}
              e{" "}
              <Link
                to="/privacidade"
                className="text-[var(--highlight)] hover:opacity-80 transition-opacity duration-200"
              >
                Política de Privacidade
              </Link>
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[var(--highlight)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--highlight)] transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Entrar
            </button>
          </div>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--border)]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[var(--secondary-bg)] text-[var(--text)] opacity-70">
                  Ou continue com
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center items-center py-2 px-4 border border-[var(--border)] rounded-md shadow-sm bg-[var(--bg)] text-sm font-medium text-[var(--text)] opacity-70 hover:opacity-100 transition-colors duration-200"
              >
                <FaGoogle className="w-5 h-5 text-red-500" />
                <span className="ml-2">Google</span>
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center items-center py-2 px-4 border border-[var(--border)] rounded-md shadow-sm bg-[var(--bg)] text-sm font-medium text-[var(--text)] opacity-70 hover:opacity-100 transition-colors duration-200"
              >
                <FaGithub className="w-5 h-5" />
                <span className="ml-2">GitHub</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
