export default function Bill({ bill, onBill }) {
  return (
    <div>
      How much was the bill?
      <input
        type="text"
        value={bill === 0 ? "" : bill}
        onChange={(e) => onBill(Number(e.target.value))}
      />
    </div>
  );
}
