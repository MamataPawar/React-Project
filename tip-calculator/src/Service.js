export default function Service({ serPercentage, onService, children }) {
  return (
    <div>
      {children}
      <select
        onChange={(e) => onService(Number(e.target.value))}
        value={serPercentage}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
