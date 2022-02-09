import { Paragraph } from "components/Statistics/Statistics.styles"

const Notification = ({message, total}) => {
  return (
   total === 0 && <Paragraph fz='22px' fw='500'>{message}</Paragraph>
  )
}

export default Notification