import styled from 'styled-components'

const ChatInput = styled.textarea`
  border: solid 1px ${({theme}) => theme.border};
  border-left: 5px solid ${({color}) => color};
  padding-left: 15px;
  margin: 10px;
  padding: 5px;
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  background-color: #fff;
  color: #000;
`

export default ChatInput
