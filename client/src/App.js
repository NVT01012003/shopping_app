import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { SignUp } from "./pages/signup";
import { SignIn } from "./pages/signin";
import { Products } from "./pages/products";

function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </BrowserRouter>
        </Layout>
    );
}

export default App;
