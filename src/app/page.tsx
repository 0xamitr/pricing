/* eslint-disable react/no-unescaped-entities */
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Assignment: Recreated the pricing component</h1>
      <section className={styles.section}>
        <h2 className={styles.head2}>API Pricing</h2>
        <p>Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thead}>API</th>
              <th className={styles.thead}>Model</th>
              <th className={styles.thead}>Price per 1K tokens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.tdata}>OpenAI</td>
              <td className={styles.tdata}>GPT-3.5</td>
              <td className={styles.tdata}>$0.002</td>
            </tr>
            <tr>
              <td className={styles.tdata}>OpenAI</td>
              <td className={styles.tdata}>GPT-4</td>
              <td className={styles.tdata}>$0.03</td>
            </tr>
            <tr>
              <td className={styles.tdata}>Together AI</td>
              <td className={styles.tdata}>Llama-2-70b</td>
              <td className={styles.tdata}>$0.0008</td>
            </tr>
            <tr className={styles.lastrow}>
              <td className={styles.tdata}>Together AI</td>
              <td className={styles.tdata}>Llama-2-13b</td>
              <td className={styles.tdata}>$0.0006</td>
            </tr>
          </tbody>
        </table>
        <h3 className={styles.head3}>Token Estimation</h3>
        <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
        <h3 className={styles.head3}>Billing</h3>
        <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
      </section>
    </main>
  );
}
