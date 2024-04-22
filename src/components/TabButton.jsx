export default function TabButton({ children, onSelect, isSelected }) {
    console.log("TabContent Component Execting")
    
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}