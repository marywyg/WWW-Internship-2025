'use client';

import React from 'react';
import Header from '@/components/header/Header';
import PlaylistsSection from '@/components/playlists/PlaylistsSection';

const PlaylistsPage = () => {
    return (
        <div className="p-4">
            <Header />
            <PlaylistsSection />
        </div>
    );
};

export default PlaylistsPage;
