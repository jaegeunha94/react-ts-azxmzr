const Home = React.lazy(() =>
  import('./src/Performance/ReactLazy/ReactLazyTest')
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
