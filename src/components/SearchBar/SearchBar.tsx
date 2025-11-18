import "./SearchBar.css";

export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="searchbar-wrapper">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input"
        placeholder="Search tickers..."
      />
    </div>
  );
}





