import styles from "./Details.module.scss";

interface Props {
    readonly number: string;
    readonly detail: string;
}

const Details: React.FunctionComponent<Props> = props => {
    const { number, detail } = props;
    return (
        <div className={styles.wrap}>
            <p className={styles.number}>{number}</p>
            <p className={styles.detail}>{detail}</p>
        </div>
    );
};

export default Details;
