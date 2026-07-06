// To update the status: change this string, save, push.
const STATUS = { studying: "Full-Stack Architecture" };

export default function StatusBar() {
  return (
    <div className="status-bar mono">
      <div className="status-dot" aria-hidden="true" />
      <span className="status-label">{"// currently shipping"}</span>
      <span className="status-studying">{STATUS.studying}</span>
    </div>
  );
}
