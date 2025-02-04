export default function Calculate({ bill, servicePer, frndServicePer }) {
  const avg = bill * ((servicePer + frndServicePer) / 2 / 100);
  const totalBill = Number(bill) + avg;

  return (
    <div>
      <h2>
        You pay ${totalBill} (${bill}+${avg} tip)
      </h2>
    </div>
  );
}
