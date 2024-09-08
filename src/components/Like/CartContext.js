import React, { createContext, useContext, useState, useEffect } from 'react';

// ایجاد یک Context جدید برای سبد خرید
const CartContext = createContext();

// کامپوننت Provider برای مدیریت وضعیت سبد خرید
export const CartProvider = ({ children }) => {
  // مقدار اولیه سبد خرید از localStorage یا یک آرایه خالی
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);
  const [totalFee, setTotalFee] = useState(0);

  // به‌روزرسانی localStorage هر بار که سبد خرید تغییر می‌کند
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // محاسبه و به‌روزرسانی قیمت نهایی سبد خرید
  useEffect(() => {
    // تابعی برای تبدیل قیمت به عدد
    const parseFee = (fee) => {
      if (!fee) return 0;
      return parseFloat(fee.replace(/[^0-9.]/g, ''));
    };

    // محاسبه قیمت نهایی با توجه به مقادیر سبد خرید
    const newTotalFee = cart.reduce((total, item) => {
      const fee = parseFee(item.fee);
      return total + fee * item.quantity;
    }, 0);

    setTotalFee(newTotalFee);
  }, [cart]);

  // تابعی برای افزودن محصول به سبد خرید
  const addToCart = (product) => {
    // بررسی وجود محصول در سبد خرید
    const existingItemIndex = cart.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      // اگر محصول وجود داشته باشد، مقدار آن را افزایش می‌دهیم
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // اگر محصول جدید باشد، به سبد خرید اضافه می‌کنیم
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // تابعی برای محاسبه تعداد کل محصولات در سبد خرید
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // تابعی برای حذف محصول از سبد خرید
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  // تابعی برای افزایش مقدار محصول در سبد خرید
  const incrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // تابعی برای کاهش مقدار محصول در سبد خرید
  const decrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // تابعی برای خالی کردن سبد خرید
  const clearCart = () => {
    setCart([]);
  };

  // ارائه مقادیر و توابع به context
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, getTotalQuantity, clearCart, totalFee }}
    >
      {children}
    </CartContext.Provider>
  );
};

// هوک برای استفاده از context
export const useCart = () => {
  return useContext(CartContext);
};
