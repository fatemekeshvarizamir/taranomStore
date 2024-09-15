import axios from 'axios';

// آدرس JSON Server
const API_URL = 'http://localhost:3000';

// ایجاد نمونه Axios با پیکربندی پیش‌فرض
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// دریافت لیست از دسته‌بندی‌ها
export const getCategories = async () => {
  try {
    const response = await apiClient.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// اضافه کردن یک دسته‌بندی جدید
export const addCategory = async (category) => {
  try {
    const response = await apiClient.post('/categories', category);
    return response.data;
  } catch (error) {
    console.error('Error adding category:', error);
    throw error;
  }
};

// دریافت یک دسته‌بندی خاص
export const getCategoryById = async (id) => {
  try {
    const response = await apiClient.get(`/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching category:', error);
    throw error;
  }
};

// به‌روزرسانی یک دسته‌بندی
export const updateCategory = async (id, updatedCategory) => {
  try {
    const response = await apiClient.put(`/categories/${id}`, updatedCategory);
    return response.data;
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
};

// حذف یک دسته‌بندی
export const deleteCategory = async (id) => {
  try {
    await apiClient.delete(`/categories/${id}`);
  } catch (error) {
    console.error('Error deleting category:', error);
    throw error;
  }
};
