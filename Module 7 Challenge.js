function readLocalStorage(key) {
    const storedData = localStorage.getItem(key);
  
    if (storedData) {
      try {
        return JSON.parse(storedData);
      } catch (error) {
        console.error("Error parsing data from localStorage:", error);
        return [];
      }
    } else {
      return [];
    }
  }