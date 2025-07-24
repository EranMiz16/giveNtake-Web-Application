# Firebase Data Setup Guide

## מה זה?

המערכת הזו ממירה את כל המוק דאטה שלך לנתונים אמיתיים ב-Firebase Firestore.

## איך להשתמש:

### 1. הרצת האפליקציה
```bash
npm start
```

### 2. אתחול הנתונים
- פתח את האפליקציה בדפדפן
- תראה את הקומפוננטה "Firebase Data Management" בראש העמוד
- לחץ על "🚀 Initialize Database with Mock Data"
- חכה עד שתראה הודעה על הצלחה

### 3. הסרת הקומפוננטה
אחרי שהנתונים הועלו בהצלחה, הסר את השורה הזו מ-`src/App.js`:
```jsx
<DataInitializer />
```

## מה נוצר במסד הנתונים:

### Collections:
- **users** - משתמשים
- **items** - פריטים
- **bids** - הצעות החלפה
- **userItems** - פריטים של משתמשים

### נתונים שנוצרים:
- **משתמשים**: Dana Cohen, Israel Israeli, Yuval Fadida
- **פריטים**: Beats Headphones, Serving Utensils, Cool Hat, Retro Hat
- **הצעות החלפה**: 2 דוגמאות
- **פריטי משתמש**: Modern Floor Lamp, Vintage Bookshelf, Nike Air Force 1

## שירותים זמינים:

### FirebaseDataService
```javascript
import FirebaseDataService from './services/firebaseDataService';

// קבלת כל הפריטים
const items = await FirebaseDataService.getAllItems();

// קבלת פריט לפי ID
const item = await FirebaseDataService.getItemById('item1');

// הוספת פריט חדש
const newItemId = await FirebaseDataService.addItem(itemData);

// עדכון פריט
await FirebaseDataService.updateItem(itemId, updateData);

// מחיקת פריט
await FirebaseDataService.deleteItem(itemId);
```

### DataService (רמה גבוהה יותר)
```javascript
import DataService from './services/dataService';

// קבלת פריטים עם מידע משתמש
const itemsWithUsers = await DataService.getItemsWithUsers();

// חיפוש פריטים
const searchResults = await DataService.searchItems('headphones');

// קבלת הצעות החלפה עם פרטים מלאים
const bidsWithDetails = await DataService.getBidsWithDetails();

// יצירת הצעת החלפה חדשה
const bidId = await DataService.createBid(takeItemId, giveItemId, userId);

// קבלת פריטים זמינים
const availableItems = await DataService.getAvailableItems();
```

## מבנה נתונים:

### User
```javascript
{
  id: 'user1',
  name: 'Dana Cohen',
  location: 'Haifa',
  swaps: 27,
  profilePic: '...',
  tags: ['👗 Women\'s Clothing', '🧳 Travel Bags', ...],
  phone: '050-1234567',
  email: 'danac9@gmail.com',
  createdAt: Date,
  updatedAt: Date
}
```

### Item
```javascript
{
  id: 'item1',
  category: '🎧 Headphones',
  name: 'Beats Headphones',
  description: '...',
  story: '...',
  imageUrl: '...',
  images: ['...'],
  userId: 'user2',
  status: 'available', // available, traded, pending
  createdAt: Date,
  updatedAt: Date
}
```

### Bid
```javascript
{
  id: 'bid1',
  timestamp: Date,
  takeItemId: 'item2',
  giveItemId: 'item1',
  userId: 'user2',
  status: 'pending', // pending, accepted, rejected, completed
  createdAt: Date,
  updatedAt: Date
}
```

## אזהרות:

⚠️ **חשוב**: הרץ את אתחול הנתונים רק פעם אחת! הרצה חוזרת תיצור נתונים כפולים.

⚠️ **גיבוי**: לפני הרצת המערכת, ודא שיש לך גיבוי של הנתונים הקיימים.

## פתרון בעיות:

### שגיאה: "Permission denied"
- ודא שיש לך הרשאות מתאימות ב-Firebase
- בדוק את כללי האבטחה ב-Firestore

### שגיאה: "Collection not found"
- ודא שהפרויקט מוגדר נכון ב-Firebase
- בדוק את הקונפיגורציה ב-`src/firebase.js`

### נתונים כפולים
- השתמש בכפתור "🗑️ Clear All Data" כדי לנקות את הנתונים
- הרץ שוב את האתחול

## תמיכה:

אם יש לך בעיות או שאלות, בדוק:
1. Console בדפדפן לשגיאות
2. Firebase Console לבדיקת הנתונים
3. Network tab לבדיקת בקשות 