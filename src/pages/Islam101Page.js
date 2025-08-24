import React from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { FiBook, FiHeart, FiStar, FiUsers, FiTarget, FiAward } from 'react-icons/fi';

const Islam101Page = () => {
  const fivePillars = [
    {
      icon: FiStar,
      title: "Shahada (Declaration of Faith)",
      description: "The testimony that there is no god but Allah and Muhammad is His messenger.",
      arabic: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّٰهِ",
      english: "I bear witness that there is no god but Allah, and I bear witness that Muhammad is the messenger of Allah."
    },
    {
      icon: FiTarget,
      title: "Salah (Prayer)",
      description: "Performing the five daily prayers at their prescribed times.",
      arabic: "الصَّلَاةُ",
      english: "Prayer"
    },
    {
      icon: FiHeart,
      title: "Zakat (Charity)",
      description: "Giving a portion of one's wealth to those in need.",
      arabic: "الزَّكَاةُ",
      english: "Charity"
    },
    {
      icon: FiBook,
      title: "Sawm (Fasting)",
      description: "Fasting during the month of Ramadan.",
      arabic: "الصَّوْمُ",
      english: "Fasting"
    },
    {
      icon: FiUsers,
      title: "Hajj (Pilgrimage)",
      description: "Making the pilgrimage to Mecca at least once in a lifetime if able.",
      arabic: "الْحَجُّ",
      english: "Pilgrimage"
    }
  ];

  const beliefs = [
    {
      title: "Belief in Allah",
      description: "Belief in the oneness of Allah (Tawhid) - that He is the only God, the Creator and Sustainer of all things."
    },
    {
      title: "Belief in Angels",
      description: "Belief in the existence of angels as spiritual beings created by Allah to carry out His commands."
    },
    {
      title: "Belief in Divine Books",
      description: "Belief in the holy books revealed by Allah, including the Quran, Torah, Psalms, and Gospel."
    },
    {
      title: "Belief in Prophets",
      description: "Belief in all the prophets sent by Allah, from Adam to Muhammad (peace be upon them all)."
    },
    {
      title: "Belief in the Day of Judgment",
      description: "Belief in the resurrection and the final judgment when all people will be accountable for their actions."
    },
    {
      title: "Belief in Divine Decree",
      description: "Belief in Allah's predestination and that everything happens according to His will and knowledge."
    }
  ];

  const islamicValues = [
    {
      title: "Justice",
      description: "Upholding justice and fairness in all dealings, regardless of personal feelings or relationships."
    },
    {
      title: "Mercy",
      description: "Showing compassion and mercy to all of Allah's creation, including humans, animals, and the environment."
    },
    {
      title: "Honesty",
      description: "Being truthful in speech and actions, and maintaining integrity in all aspects of life."
    },
    {
      title: "Humility",
      description: "Recognizing one's place before Allah and treating others with respect and dignity."
    },
    {
      title: "Generosity",
      description: "Being generous with time, wealth, and knowledge, and helping those in need."
    },
    {
      title: "Patience",
      description: "Enduring difficulties with patience and trust in Allah's plan."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Islam 101
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Essential knowledge about Islam, including the five pillars, basic beliefs, and common practices.
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="text-center">
              <FiBook size={48} className="text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                What is Islam?
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Islam is a monotheistic Abrahamic religion that teaches the worship of one God (Allah). 
                The word "Islam" means "submission to the will of God" and "peace." Muslims believe that 
                Islam is the complete and universal version of a primordial faith that was revealed many 
                times before through prophets including Adam, Abraham, Moses, and Jesus.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Five Pillars */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            The Five Pillars of Islam
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fivePillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-all duration-200">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent size={24} className="text-primary" />
                      </div>
                      <CardTitle className="text-lg">{pillar.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                      {pillar.description}
                    </p>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <p className="text-lg font-arabic text-right leading-relaxed text-foreground mb-2">
                        {pillar.arabic}
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        "{pillar.english}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Six Articles of Faith */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Six Articles of Faith
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {beliefs.map((belief, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <CardTitle className="text-lg">{belief.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {belief.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Islamic Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Core Islamic Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {islamicValues.map((value, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <FiAward size={20} className="text-secondary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-6">
          {/* Common Practices */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Common Islamic Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Daily Practices</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Five daily prayers (Salah)</li>
                    <li>• Reading and studying the Quran</li>
                    <li>• Making dua (supplications)</li>
                    <li>• Saying "Bismillah" before eating</li>
                    <li>• Greeting with "Assalamu Alaikum"</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Weekly Practices</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Friday prayer (Jumu'ah)</li>
                    <li>• Family gatherings</li>
                    <li>• Community service</li>
                    <li>• Learning Islamic knowledge</li>
                    <li>• Visiting the sick and elderly</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Islamic Etiquette */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Islamic Etiquette (Adab)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Personal Conduct</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Maintaining cleanliness and hygiene</li>
                    <li>• Dressing modestly</li>
                    <li>• Speaking kindly and truthfully</li>
                    <li>• Being punctual and reliable</li>
                    <li>• Showing respect to elders</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Social Conduct</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Being hospitable to guests</li>
                    <li>• Helping neighbors and community</li>
                    <li>• Avoiding gossip and backbiting</li>
                    <li>• Resolving conflicts peacefully</li>
                    <li>• Supporting those in need</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Important Islamic Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Basic Terms</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Allah:</strong> The Arabic word for God</div>
                    <div><strong>Muslim:</strong> One who submits to Allah</div>
                    <div><strong>Islam:</strong> Submission to the will of Allah</div>
                    <div><strong>Quran:</strong> The holy book of Islam</div>
                    <div><strong>Hadith:</strong> Sayings of Prophet Muhammad</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Prayer Terms</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Salah:</strong> Prayer</div>
                    <div><strong>Wudu:</strong> Ablution</div>
                    <div><strong>Qibla:</strong> Direction of prayer</div>
                    <div><strong>Adhan:</strong> Call to prayer</div>
                    <div><strong>Masjid:</strong> Mosque</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Greetings</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Assalamu Alaikum:</strong> Peace be upon you</div>
                    <div><strong>Wa Alaikum Assalam:</strong> And peace be upon you</div>
                    <div><strong>Insha'Allah:</strong> If Allah wills</div>
                    <div><strong>Alhamdulillah:</strong> Praise be to Allah</div>
                    <div><strong>Masha'Allah:</strong> What Allah has willed</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Islam101Page;
