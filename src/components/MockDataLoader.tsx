'use client';

import { useEffect } from 'react';

export default function MockDataLoader() {
  useEffect(() => {
    const loadMockData = async () => {
      // Only inject if not already loaded
      if (!localStorage.getItem('grindtales_users') || !localStorage.getItem('grindtales_stories')) {
        try {
          const [usersRes, storiesRes] = await Promise.all([
            fetch('/data/mock_users.json'),
            fetch('/data/mock_stories.json')
          ]);

          const users = await usersRes.json();
          const stories = await storiesRes.json();

          localStorage.setItem('grindtales_users', JSON.stringify(users));
          localStorage.setItem('grindtales_stories', JSON.stringify(stories));

          console.log('✅ Mock data injected into localStorage!');
        } catch (err) {
          console.error('❌ Failed to load mock data:', err);
        }
      }
    };

    loadMockData();
  }, []);

  return null;
} 