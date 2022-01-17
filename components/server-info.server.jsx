export default function ServerInfo() {
  return (
    <div className="pb-5 text-sm text-center">
      Rendered at {new Date().toTimeString()} with Edge Middleware.
    </div>
  );
}
