import Layout from "../components/Layout";
import classes from '../styles/not-found.module.css'

export default function NotFound() {
    return (
        <Layout>
            <h1 className={classes.error}>404</h1>
            <p>page not found</p>
        </Layout>
    )
}