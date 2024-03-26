import { useState } from "react";

export default function MyComponent_09() {
  // 변수 목록
  const [name, setName] = useState("Guest");
  const [quantity, setQuntity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("VISA");
  const [shipping, setShipping] = useState("Delivery");

  //함수 목록
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuntity(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  // 주문
  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <input type="text" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>
      <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instaructions" cols="30" rows="10"></textarea>
      <select value="payment" onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="VISA">VISA</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment: {payment}</p>
      <label htmlFor="pickUp">
        <input type="radio" name="pickUp" id="pickUp" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange}/>
        Pick up<br/>
      </label>
    </div>
  );
}
