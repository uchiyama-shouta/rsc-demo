export default function ServerInfo() {
  const now = new Date().toTimeString();
  return (
    <div className="pb-5 text-sm text-center">
      Rendered at {now} with Edge Middleware.
    </div>
  );
}
