import './styles.scss';

const History = (props) => {

  return (
    <section>
      <h3>History</h3>
      {Object.values(props.requestParams).map((values,idx) => <p key={`method-${idx}`}>{values}</p>)}
    </section>
  )
}

export default History;