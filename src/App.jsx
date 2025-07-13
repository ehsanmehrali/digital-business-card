import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-4">
        <h2 className="text-xl">Welcome to My Application</h2>
        <p>This is a simple React application with a header component.</p>
      </main>
    </div>
  );
}
