import styles from "./sidebar.module.css";

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <ul className="list-group-flush">
                <li className="list-group-item">
                    <button type="button" className="btn btn-lg btn-outline-primary">Pick Again</button>
                </li>
                <li className="list-group-item">
                    <button type="button" className="btn btn-lg btn-outline-primary">Primary</button>
                </li>
            </ul>
        </div>
    )
}