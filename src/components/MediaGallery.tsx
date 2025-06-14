
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, FileText, BookOpen, ExternalLink } from 'lucide-react';

const mediaItems = [
  {
    type: 'video',
    title: 'AI in Practice: Real-World Applications',
    description: 'Deep dive into practical AI implementations and their business impact',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    url: 'https://youtube.com/playlist?list=PL0_fxxZ-lFiTl8tXrMhDtUx4jgBq-t0i3'
  },
  {
    type: 'video',
    title: 'Web3 Fundamentals Explained',
    description: 'Comprehensive guide to understanding blockchain and decentralized technologies',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
    url: 'https://youtube.com/playlist?list=PL0_fxxZ-lFiTl8tXrMhDtUx4jgBq-t0i3'
  },
  {
    type: 'video',
    title: 'The Future of Decentralized Finance',
    description: 'Analysis of DeFi protocols and their potential to reshape finance',
    thumbnail: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=300&fit=crop',
    url: 'https://youtube.com/playlist?list=PL0_fxxZ-lFiTl8tXrMhDtUx4jgBq-t0i3'
  },
  {
    type: 'whitepaper',
    title: 'AI Ethics in Enterprise Applications',
    description: 'Comprehensive framework for implementing ethical AI practices in business environments',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    url: '#'
  },
  {
    type: 'whitepaper',
    title: 'Web3 Governance Models: A Comparative Study',
    description: 'Analysis of different governance approaches in decentralized autonomous organizations',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    url: '#'
  },
  {
    type: 'article',
    title: 'Machine Learning for Business Leaders',
    description: 'Practical guide to understanding and implementing ML solutions in enterprise settings',
    thumbnail: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop',
    url: '#'
  },
  {
    type: 'article',
    title: 'The Intersection of AI and Blockchain',
    description: 'Exploring synergies between artificial intelligence and distributed ledger technologies',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop',
    url: '#'
  },
  {
    type: 'article',
    title: 'Smart Contracts: Beyond Cryptocurrency',
    description: 'Real-world applications of smart contracts in various industries and use cases',
    thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
    url: '#'
  }
];

const MediaGallery = () => {
  const [filter, setFilter] = useState('all');

  const filteredItems = mediaItems.filter(item => 
    filter === 'all' || item.type === filter
  );

  const getIcon = (type) => {
    switch (type) {
      case 'video': return Video;
      case 'whitepaper': return FileText;
      case 'article': return BookOpen;
      default: return BookOpen;
    }
  };

  const getSectionTitle = () => {
    switch (filter) {
      case 'video': return 'YouTube Content';
      case 'whitepaper': return 'Thought Leadership';
      case 'article': return 'Tech Learning Articles';
      default: return 'Content & Insights';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-4">
            {getSectionTitle()}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Explore my latest insights on AI, Web3, and emerging technologies through videos, research papers, and in-depth articles.
          </p>
          
          <div className="flex justify-center space-x-2">
            {[
              { key: 'all', label: 'All Content' },
              { key: 'video', label: 'YouTube Videos' },
              { key: 'whitepaper', label: 'Whitepapers' },
              { key: 'article', label: 'Articles' }
            ].map(({ key, label }) => (
              <Button
                key={key}
                variant={filter === key ? "default" : "outline"}
                onClick={() => setFilter(key)}
                className={`rounded-full ${
                  filter === key 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const IconComponent = getIcon(item.type);
            return (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <IconComponent className="w-4 h-4 text-slate-600" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
