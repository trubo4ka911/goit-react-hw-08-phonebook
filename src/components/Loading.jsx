import PropagateLoader from 'react-spinners/PropagateLoader';

export default function Loading() {
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  return (
    <div style={style}>
    <PropagateLoader
      color="#45d583"
      size={20}
    />
    </div>
  );
}