import Layout from "@/components/layout";
import Sidebar from "@/components/sidebar/sidebar";
import styles from "./lucky-pick.module.css";

export default function LuckyPick() {
    return (
        <Layout>
            <Sidebar />
            <div className="col-9">
                <h1 className={styles.header}>LUCKY PICK</h1>
            </div>
        </Layout>
    )
}