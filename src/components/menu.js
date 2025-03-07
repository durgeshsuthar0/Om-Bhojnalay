import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import CategoryTabs from "./CategoryTabs";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("BREAKFAST");

  const menuItems = {
    BREAKFAST: {
      BreakFast: [
        { name: "Aloo Paratha", hindiName: "आलू पराठा", price: "Rs. 100" },
        { name: "Masala Paratha", hindiName: "मसाला पराठा", price: "Rs. 70" },
        { name: "Maggi Masala", hindiName: "मग्गी मसाला", price: "Rs. 100" },
        { name: "Poha", hindiName: "पोहा", price: "Rs. 60" },
        { name: "Upma", hindiName: "उपमा", price: "Rs. 70" },
        {
          name: "Simple Paratha Curd",
          hindiName: "साधा पराठा दही",
          price: "Rs. 50",
        },
      ],
    },
    STARTER: {
      Salad: [
        { name: "Nimbu Pyaj", hindiName: "निम्बू प्याज", price: "Rs. 30" },
        { name: "Tomato Salad", hindiName: "टमाटर सलाद", price: "Rs. 40" },
        { name: "Green Salad", hindiName: "हरी सलाद", price: "Rs. 50" },
        { name: "Gud", hindiName: "गुड़", price: "Rs. 20" },
        { name: "Chutney", hindiName: "चटनी", price: "Rs. 20" },
      ],
      Papad: [
        { name: "Papad Rosted", hindiName: "पापड़ रोस्टेड", price: "Rs. 20" },
        { name: "Fry Papad", hindiName: "फ्राई पापड़", price: "Rs. 30" },
        { name: "Masala Papad", hindiName: "मसाला पापड़", price: "Rs. 50" },
        {
          name: "Fry Masala Papad",
          hindiName: "फ्राई मसाला पापड़",
          price: "Rs. 60",
        },
        { name: "Papad Churi", hindiName: "पापड़ चुरी", price: "Rs. 100" },
        { name: "Khichiya Masala", hindiName: "खिचिया मसाला", price: "Rs. 70" },
        { name: "Khichiya", hindiName: "खिचिया", price: "Rs. 30" },
      ],
    },
    RAITA: {
      Raita: [
        {
          name: "Masala Butter Milk",
          hindiName: "मसाला बटर मिल्क",
          price: "Rs. 20",
        },
        {
          name: "Bundi Butter Milk",
          hindiName: "बुंदी बटर मिल्क",
          price: "Rs. 30",
        },
        { name: "Fry Raita", hindiName: "फ्राई रायता", price: "Rs. 90" },
        { name: "Bundi Raita", hindiName: "बुंदी रायता", price: "Rs. 80" },
        { name: "Veg Raita", hindiName: "वेज रायता", price: "Rs. 80" },
        {
          name: "Veg Bundi Raita",
          hindiName: "वेज बुंदी रायता",
          price: "Rs. 90",
        },
        { name: "Pyaj Raita", hindiName: "प्याज रायता", price: "Rs. 70" },
      ],
    },
    SABJI: {
      Sabji: [
        { name: "Dal Fry", hindiName: "दाल फ्राई", price: "Rs. 100" },
        { name: "Dal Tadka", hindiName: "दाल तड़का", price: "Rs. 130" },
        { name: "Dal Butter", hindiName: "दाल बटर", price: "Rs. 150" },
        { name: "Sev Tomato", hindiName: "सेव टमाटर", price: "Rs. 140" },
        { name: "Sev Pyaj", hindiName: "सेव प्याज", price: "Rs. 140" },
        {
          name: "Sev Bhaji (Milk)",
          hindiName: "सेव भाजी (दूध)",
          price: "Rs. 150",
        },
        { name: "Aloo Mutter", hindiName: "आलू मटर", price: "Rs. 150" },
        { name: "Aloo Tomato", hindiName: "आलू टमाटर", price: "Rs. 150" },
        { name: "Aloo Pyaj", hindiName: "आलू प्याज", price: "Rs. 150" },
        { name: "Jeera Aloo", hindiName: "जीरा आलू", price: "Rs. 140" },
        { name: "Curd Aloo", hindiName: "दही आलू", price: "Rs. 150" },
        { name: "Chana Masala", hindiName: "चना मसाला", price: "Rs. 150" },
        { name: "Besan Gatta", hindiName: "बेसन गट्टा", price: "Rs. 150" },
        { name: "Kadi Pakoda", hindiName: "कढ़ी पकौड़ा", price: "Rs. 150" },
        { name: "Kadi Pyaj", hindiName: "कढ़ी प्याज", price: "Rs. 150" },
        { name: "Simple Kadi", hindiName: "साधी कढ़ी", price: "Rs. 120" },
      ],
    },
    // Seasonal Veg section
    "SEASONAL VEGETABLES": {
      "Seasonal Veg": [
        { name: "Bhindi Masala", hindiName: "भिंडी मसाला", price: "Rs. 160" },
        { name: "Bhindi Fry", hindiName: "भिंडी फ्राई", price: "Rs. 150" },
        { name: "Bhindi Pyaj", hindiName: "भिंडी प्याज", price: "Rs. 150" },
        { name: "Aloo Bhindi", hindiName: "आलू भिंडी", price: "Rs. 150" },
        { name: "Aloo Gobhi", hindiName: "आलू गोभी", price: "Rs. 150" },
        {
          name: "Mix Veg Paneer",
          hindiName: "मिक्स वेज पनीर",
          price: "Rs. 200",
        },
        { name: "Gobhi Mutter", hindiName: "गोभी मटर", price: "Rs. 180" },
        { name: "Gobhi Tomato", hindiName: "गोभी टमाटर", price: "Rs. 180" },
        { name: "Mutter Tomato", hindiName: "मटर टमाटर", price: "Rs. 160" },
        { name: "Mix Veg", hindiName: "मिक्स वेज", price: "Rs. 180" },
      ],
    },
    ROTI: {
      Roti: [
        { name: "Chapati Roti", hindiName: "चपाती रोटी", price: "Rs. 15" },
        {
          name: "Chapati Roti Ghee",
          hindiName: "चपाती रोटी घी",
          price: "Rs. 20",
        },
        {
          name: "Jadi Roti Tikkad",
          hindiName: "जड़ी रोटी टिक्कड़",
          price: "Rs. 50",
        },
        { name: "Khoba Roti", hindiName: "खोबा रोटी", price: "Rs. 80" },
        { name: "Simple Paratha", hindiName: "साधा पराठा", price: "Rs. 30" },
        { name: "Misi Roti", hindiName: "मिश्री रोटी", price: "Rs. 60" },
        { name: "Ghee 20gm", hindiName: "घी 20 ग्राम", price: "Rs. 20" },
      ],
    },
    RICE: {
      Rice: [
        { name: "Jeera Rice", hindiName: "जीरा चावल", price: "Rs. 100" },
        { name: "Plain Rice", hindiName: "सादा चावल", price: "Rs. 90" },
        { name: "Fry Rice", hindiName: "फ्राई चावल", price: "Rs. 100" },
        { name: "Vej Pulav", hindiName: "वेज पुलाव", price: "Rs. 130" },
        { name: "Mutter Pulav", hindiName: "मटर पुलाव", price: "Rs. 120" },
        { name: "Kadi Khichdi", hindiName: "कढ़ी खिचड़ी", price: "Rs. 150" },
        { name: "Masala Khichdi", hindiName: "मसाला खिचड़ी", price: "Rs. 120" },
      ],
    },
    "HOT & COLD": {
      veg: [
        { name: "Lassi", hindiName: "लस्सी", price: "Rs. 50" },
        { name: "Tea", hindiName: "चाय", price: "Rs. 20" },
        { name: "Coffee", hindiName: "कॉफी", price: "Rs. 30" },
        { name: "Milk", hindiName: "दूध", price: "Rs. 30" },
      ],
    },
    "OM SPECIAL": {
      Churma: [
        {
          name: "Om Special Churma",
          hindiName: "ओम स्पेशल चुरमा",
          price: "Rs. 200",
        },
      ],
      "Fix Thali": [
        {
          name: "",
          items: [
            {
              name: "4 Chapati Roti, 1 Sabji, 1 Daal, Salad",
              hindiName: "4 चपाती रोटी, 1 सब्जी, 1 दाल, सलाद",
            },
            { name: "Total", price: "Rs. 150" },
          ],
        },
        {
          name: "",
          items: [
            {
              name: "4 Chapati Roti, 1 Sabji, 1 Daal, Rice, Chash, Papad, Salad",
              hindiName: "4 चपाती रोटी, 1 सब्जी, 1 दाल, चावल, छास, पापड़, सलाद",
            },
            { name: "Total", price: "Rs. 200" },
          ],
        },
        {
          name: "",
          items: [
            {
              name: "Kadi, Gatta Sabji, Khoba Roti, Ghee Gud, Chatni, Chash, Papad, Salad",
              hindiName:
                "कढ़ी, गट्टा सब्जी, खोबा रोटी, घी गुड़, चटनी, छास, पापड़, सलाद",
            },
            { name: "Total", price: "Rs. 250" },
          ],
        },
      ],
    },
  };

  const categories = Object.keys(menuItems);

  return (
    <div>
      <p className="d-flex justify-content-center text-success fw-bold veg-text">
        100% Pure Veg
      </p>
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <Row>
        {Object.keys(menuItems[activeCategory]).map((subcategory, index) => (
          <Col md={12} key={index}>
            <h5 className="title mt-3">
              {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}:
            </h5>
            {menuItems[activeCategory][subcategory].map((item, itemIndex) =>
              item.items ? (
                <Card className=" mb-3" key={itemIndex}>
                  <Card.Body>
                    <h6>{item.name}</h6>
                    <div className="d-flex flex-column">
                      {item.items.map((subItem, subItemIndex) => (
                        <div
                          key={subItemIndex}
                          className="d-flex justify-content-between"
                        >
                          <div>
                            <h5 className="fix-thali-title">{subItem.name}</h5>
                            {subItem.hindiName && (
                              <p
                                className="text-black"
                                style={{ fontSize: "14px" }}
                              >
                                {subItem.hindiName}
                              </p>
                            )}
                          </div>
                          <span className=" price">{subItem.price}</span>
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              ) : (
                <Card className="mb-3" key={itemIndex}>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <Card.Title className="mb-0">{item.name}</Card.Title>
                        {item.hindiName && (
                          <p className=" mb-0" style={{ fontSize: "14px" }}>
                            {item.hindiName}
                          </p>
                        )}
                      </div>
                      <span className="price">{item.price}</span>
                    </div>
                  </Card.Body>
                </Card>
              )
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Menu;
