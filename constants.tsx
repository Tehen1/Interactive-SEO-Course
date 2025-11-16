import { type Level } from './types';

export const COURSE_DATA: Level[] = [
  {
    id: 1,
    title: "Fondamentaux du SEO",
    duration: "2-3h",
    description: "Histoire, définitions, mythes vs réalités, et les piliers du référencement naturel.",
    modules: [
      {
        id: "1.1",
        title: "SEO vs SEA vs SEM",
        lessons: [
          {
            id: "1.1.1",
            title: "Définitions et différences",
            duration: 25,
            content: "Le SEO (Search Engine Optimization) est le processus d'optimisation d'un site web pour améliorer son classement naturel. Le SEA (Search Engine Advertising) est la publicité payante, et le SEM (Search Engine Marketing) combine les deux. Un exercice clé est de créer un tableau comparatif sur les critères de coût, délai et permanence.",
            questions: [
              {
                id: "q1.1.1.1",
                question: "Que signifie le sigle SEO ?",
                options: [
                  { text: "Search Engine Advertising", isCorrect: false },
                  { text: "Search Engine Optimization", isCorrect: true },
                  { text: "Search Everywhere Online", isCorrect: false },
                  { text: "Software Engine Optimization", isCorrect: false }
                ],
                explanation: "SEO signifie 'Search Engine Optimization' (Optimisation pour les moteurs de recherche). C'est le processus visant à améliorer le classement naturel d'un site dans les résultats de recherche.",
                points: 5,
              },
              {
                id: "q1.1.1.2",
                question: "Quelle est la principale différence entre SEO et SEA ?",
                options: [
                    { text: "SEO = payant, SEA = gratuit", isCorrect: false },
                    { text: "SEO = gratuit et long-terme, SEA = payant et immédiat", isCorrect: true },
                    { text: "SEO ne marche pas sur Google", isCorrect: false },
                    { text: "SEA est plus efficace que SEO", isCorrect: false },
                ],
                explanation: "SEO vise le trafic 'organique' (gratuit) sur le long terme (3-12 mois), tandis que le SEA est de la publicité payante (liens sponsorisés) avec des résultats immédiats mais temporaires.",
                points: 8
              },
            ],
          },
        ],
      },
      {
        id: "1.2",
        title: "Historique & Évolution",
        lessons: [
            {
                id: '1.2.1',
                title: 'Des origines à Google',
                duration: 20,
                content: "L'histoire des moteurs de recherche commence avant Google. Le premier index était Archie en 1990. Dans les années 90, des moteurs comme AltaVista et des annuaires comme Yahoo! dominaient avant que Google ne révolutionne le domaine avec son algorithme PageRank en 1998.",
                questions: [
                    {
                      id: 'q1.2.1.1',
                      question: "Quel a été le premier moteur de recherche majeur aux années 1990 ?",
                      options: [
                        { text: "Google (fondé 1998)", isCorrect: false },
                        { text: "Archie (1990)", isCorrect: true },
                        { text: "Yahoo! (1994)", isCorrect: false },
                        { text: "AltaVista (1995)", isCorrect: false },
                      ],
                      explanation: "Chronologie : Archie (1990) était un index FTP primitif. AltaVista (1995) était un moteur majeur, mais Yahoo! (1994) était un annuaire. Google a été fondé en 1998.",
                      points: 5
                    },
                    {
                      id: 'q1.2.1.2',
                      question: "Qu'est-ce qui a fait le succès spectaculaire de Google par rapport à AltaVista ?",
                      options: [
                        { text: "Interface colorée attrayante", isCorrect: false },
                        { text: "Simple, rapide, pertinent via PageRank", isCorrect: true },
                        { text: "Publicités bien placées", isCorrect: false },
                        { text: "Meilleure vitesse serveur", isCorrect: false },
                      ],
                      explanation: "Les facteurs du succès de Google incluent : une interface simple, une pertinence supérieure grâce à l'algorithme PageRank basé sur la qualité des liens, et l'absence de publicité sur la page d'accueil à ses débuts.",
                      points: 8
                    }
                ]
            }
        ]
      },
      {
        id: "1.3",
        title: "Mythes vs Réalités",
        lessons: [
          {
            id: '1.3.1',
            title: 'Démystifier les croyances SEO',
            duration: 15,
            content: "Le monde du SEO est rempli de mythes et de demi-vérités. Il est crucial de savoir distinguer les facteurs réels des croyances obsolètes pour construire une stratégie efficace.",
            questions: [
              {
                id: 'q1.3.1.1',
                question: "VRAI ou FAUX: Les sites HTTPS se classent automatiquement mieux en SEO que les sites HTTP.",
                options: [
                  { text: "Vrai", isCorrect: false },
                  { text: "Faux", isCorrect: true }
                ],
                explanation: "FAUX (avec nuance). HTTPS est un facteur positif MINEUR confirmé par Google, mais son impact réel est faible. Il est surtout un standard de sécurité et de confiance pour l'utilisateur, ce qui est plus important que le gain SEO direct.",
                points: 10
              },
              {
                id: 'q1.3.1.2',
                question: "VRAI ou FAUX: La balise meta keywords est essentielle pour le SEO en 2024.",
                options: [
                  { text: "Vrai", isCorrect: false },
                  { text: "Faux", isCorrect: true }
                ],
                explanation: "FAUX. Cette balise est TOTALEMENT OBSOLÈTE depuis ~2009. Google et Bing l'ignorent complètement. Son utilisation n'apporte aucun bénéfice et peut même révéler votre stratégie de mots-clés à vos concurrents.",
                points: 10
              }
            ]
          }
        ]
      },
       {
        id: "1.4",
        title: "Les 3 Piliers du SEO",
        lessons: [
          {
            id: '1.4.1',
            title: 'Technique, Contenu, Popularité',
            duration: 20,
            content: "Une stratégie SEO solide repose sur trois piliers interdépendants. La Technique assure que votre site est accessible et compréhensible par les moteurs. Le Contenu répond aux questions des utilisateurs. La Popularité (Netlinking) démontre l'autorité de votre site via les liens externes.",
            questions: [
              {
                id: 'q1.4.1.1',
                question: "Quels sont les 3 piliers fondamentaux du SEO ?",
                options: [
                  { text: "Design, Vitesse, Mots-clés", isCorrect: false },
                  { text: "Technique, Contenu, Popularité", isCorrect: true },
                  { text: "Réseaux sociaux, Publicité, Emailing", isCorrect: false },
                  { text: "Mobile, Local, Vidéo", isCorrect: false }
                ],
                explanation: "Les trois piliers universellement reconnus du SEO sont la Technique (la fondation), le Contenu (le message) et la Popularité/Autorité (la réputation).",
                points: 10
              }
            ]
          }
        ]
      }
    ],
  },
  {
    id: 2,
    title: "Technique",
    duration: "4-5h",
    description: "SERP, crawl, indexation, balises, vitesse, architecture et mobile.",
    modules: [
      {
        id: '2.1',
        title: 'SERP & Résultats',
        lessons: [
            {
                id: '2.1.1',
                title: 'Comprendre la SERP',
                duration: 20,
                content: "La SERP (Search Engine Result Page) est la page de résultats. Son objectif principal est de classer les pages en SERP 1 (top 10) pour les requêtes ciblées. Un adage du métier dit : 'Si tu veux cacher un cadavre, mets-le en page 2 de Google'.",
                questions: [
                    {
                        id: 'q2.1.1.1',
                        question: "Que signifie l'acronyme SERP ?",
                        options: [
                            { text: "Search Engine Ranking Page", isCorrect: false },
                            { text: "Search Engine Result Page", isCorrect: true },
                            { text: "Search Engine Response Platform", isCorrect: false },
                            { text: "Search Encoded Result Protocol", isCorrect: false },
                        ],
                        explanation: "SERP signifie 'Search Engine Result Page', soit la Page de Résultats des Moteurs de recherche.",
                        points: 5
                    },
                    {
                        id: 'q2.1.1.2',
                        question: "Qu'est-ce que la 'Position Zéro' (Featured Snippet) ?",
                        options: [
                            { text: "Position #1 naturelle", isCorrect: false },
                            { text: "Annonces Google Ads", isCorrect: false },
                            { text: "Réponse structurée avant position #1", isCorrect: true },
                            { text: "Lien sponsorisé", isCorrect: false },
                        ],
                        explanation: "La 'Position Zéro' est un espace affiché AVANT les liens naturels #1-10, souvent sous forme de 'Featured Snippet' (paragraphe, liste, tableau) qui répond directement à la question de l'utilisateur.",
                        points: 10
                    }
                ]
            }
        ]
      },
      {
        id: '2.2',
        title: 'Crawl & Indexation',
        lessons: [
            {
                id: '2.2.1',
                title: 'Le parcours de Googlebot',
                duration: 25,
                content: "Le crawl est le processus d'exploration de votre site par les robots de Google (Googlebot). L'indexation est l'étape suivante où Google analyse et enregistre la page dans sa base de données. Une page crawlée n'est pas forcément indexée, et une page indexée n'est pas forcément bien classée.",
                questions: [
                    {
                        id: 'q2.2.1.1',
                        question: "Qu'est-ce que le 'Crawl' en SEO exactement ?",
                        options: [
                            { text: "Vérification des performances du site", isCorrect: false },
                            { text: "Exploration active du site par Googlebot", isCorrect: true },
                            { text: "Classement des pages", isCorrect: false },
                            { text: "Indexation automatique", isCorrect: false },
                        ],
                        explanation: "Le Crawl est le processus d'exploration active du site par les robots des moteurs de recherche comme Googlebot, qui suit les liens pour découvrir de nouvelles pages.",
                        points: 10
                    },
                    {
                        id: 'q2.2.1.2',
                        question: "Quelle est la différence EXACTE entre Crawl et Indexation ?",
                        options: [
                            { text: "Pas de différence, termes synonymes", isCorrect: false },
                            { text: "Crawl = exploration, Indexation = enregistrement", isCorrect: true },
                            { text: "Crawl = classement, Indexation = affichage", isCorrect: false },
                            { text: "Indexation arrive avant Crawl", isCorrect: false },
                        ],
                        explanation: "Le Crawl est l'exploration de la page par Googlebot. L'Indexation est l'enregistrement et l'analyse de cette page dans l'index de Google. Une page peut être crawlée mais exclue de l'index.",
                        points: 10
                    }
                ]
            }
        ]
      },
      {
        id: '2.3',
        title: 'Balises HTML Essentielles',
        lessons: [
            {
                id: '2.3.1',
                title: 'Title, H1 et Meta Description',
                duration: 30,
                content: "Certaines balises HTML ont un poids crucial en SEO. La balise <title> est le titre cliquable dans la SERP, la balise <h1> est le titre principal visible sur la page, et la meta description est le résumé qui influence le taux de clic. L'attribut 'alt' des images est également important pour le SEO et l'accessibilité.",
                questions: [
                    {
                        id: 'q2.3.1.1',
                        question: "À quoi sert exactement la balise Title en SEO ?",
                        options: [
                            { text: "Titre en haut de page visible utilisateur", isCorrect: false },
                            { text: "Titre cliquable dans SERP + critique SEO", isCorrect: true },
                            { text: "Nom de fichier HTML", isCorrect: false },
                            { text: "Simple décoration", isCorrect: false },
                        ],
                        explanation: "La balise <title> a un rôle double : elle définit le titre cliquable dans la SERP et le texte de l'onglet du navigateur. C'est un facteur de classement très important.",
                        points: 10
                    },
                    {
                        id: 'q2.3.1.2',
                        question: "Quel est l'impact de la Meta Description en SEO ?",
                        options: [
                            { text: "Très important pour classement (20-30% poids)", isCorrect: false },
                            { text: "Impact ZÉRO pour classement, mais critique pour CTR", isCorrect: true },
                            { text: "Impact négatif si mal optimisée", isCorrect: false },
                            { text: "Pas d'impact du tout", isCorrect: false },
                        ],
                        explanation: "Google a confirmé que la Meta Description n'est PAS un critère de classement direct. Cependant, elle est critique pour le Taux de Clic (CTR) car c'est le résumé que l'utilisateur lit avant de cliquer.",
                        points: 10
                    },
                    {
                        id: 'q2.3.1.3',
                        question: "Combien de balises H1 DEVRIEZ-VOUS avoir par page ?",
                        options: [
                            { text: "Minimum 5 (une par section)", isCorrect: false },
                            { text: "Une seule (1 recommandée)", isCorrect: true },
                            { text: "Autant que nécessaire (aucune limite)", isCorrect: false },
                            { text: "Pas d'importance", isCorrect: false },
                        ],
                        explanation: "La recommandation est d'utiliser une seule balise <h1> par page. Elle représente le titre principal et unique de la page, assurant une hiérarchie sémantique claire.",
                        points: 8
                    },
                    {
                        id: 'q2.3.1.4',
                        question: "À quoi sert l'attribut Alt des images exactement ?",
                        options: [
                            { text: "Description optionnelle pour accessibilité", isCorrect: false },
                            { text: "Amélioration SEO images + accessibilité + fallback", isCorrect: true },
                            { text: "Aucun impact SEO ou UX", isCorrect: false },
                            { text: "Seulement pour lecteurs d'écran", isCorrect: false },
                        ],
                        explanation: "L'attribut Alt a 3 utilités : l'accessibilité (lecteurs d'écran), le SEO (Google Images) et le fallback (texte affiché si l'image ne charge pas).",
                        points: 10
                    }
                ]
            }
        ]
      },
      {
        id: '2.4',
        title: 'Vitesse de Chargement',
        lessons: [
            {
                id: '2.4.1',
                title: 'Core Web Vitals',
                duration: 25,
                content: "La vitesse de chargement est un facteur de classement crucial. Google évalue l'expérience utilisateur via les Core Web Vitals (Signaux Web Essentiels) : LCP (Largest Contentful Paint) pour le chargement, FID (First Input Delay) pour l'interactivité, et CLS (Cumulative Layout Shift) pour la stabilité visuelle. Des outils comme PageSpeed Insights permettent de mesurer ces métriques.",
                questions: [
                    {
                        id: 'q2.4.1.1',
                        question: "Que mesure le LCP (Largest Contentful Paint) ?",
                        options: [
                            { text: "Le temps de chargement total de la page", isCorrect: false },
                            { text: "Le temps d'affichage du plus grand élément visible", isCorrect: true },
                            { text: "La stabilité des éléments de la page", isCorrect: false },
                            { text: "Le temps de réponse du serveur", isCorrect: false },
                        ],
                        explanation: "Le LCP mesure le temps nécessaire pour que le plus grand élément (image, bloc de texte) visible dans la fenêtre d'affichage soit rendu. C'est un indicateur de la perception de la vitesse de chargement.",
                        points: 12
                    }
                ]
            }
        ]
      },
      {
        id: '2.5',
        title: 'Architecture & Maillage',
        lessons: [
            {
                id: '2.5.1',
                title: 'Maillage Interne',
                duration: 20,
                content: "Le maillage interne est l'organisation des liens entre les pages de votre propre site. Une bonne architecture, souvent en 'silo', aide Google à comprendre la hiérarchie de votre contenu et répartit l'autorité (PageRank) à travers le site. L'objectif est qu'aucune page importante ne soit à plus de 3 clics de la page d'accueil.",
                questions: [
                    {
                        id: 'q2.5.1.1',
                        question: "Quel est le principal objectif du maillage interne en SEO ?",
                        options: [
                            { text: "Augmenter le nombre de pages vues", isCorrect: false },
                            { text: "Aider Google à comprendre la structure et distribuer l'autorité", isCorrect: true },
                            { text: "Rendre le site plus joli", isCorrect: false },
                            { text: "Vendre plus de produits", isCorrect: false },
                        ],
                        explanation: "Le maillage interne a un double objectif : guider les utilisateurs et les moteurs de recherche à travers le site, et distribuer l'autorité (link juice) des pages fortes vers les pages plus faibles.",
                        points: 10
                    }
                ]
            }
        ]
      },
      {
        id: '2.6',
        title: "Contrôle de l'Indexation",
        lessons: [
            {
                id: '2.6.1',
                title: 'Robots.txt et Meta Robots',
                duration: 25,
                content: "Le fichier robots.txt, à la racine du site, donne des directives aux robots d'exploration. Il peut leur interdire l'accès à certaines sections (ex: `Disallow: /admin/`). La balise meta robots (`<meta name='robots' content='noindex, nofollow'>`) contrôle l'indexation et le suivi des liens au niveau d'une page individuelle. `Disallow` ne garantit pas la non-indexation, `noindex` si.",
                questions: [
                    {
                        id: 'q2.6.1.1',
                        question: "Pour empêcher Google d'indexer une page tout en le laissant crawler le reste du site, que faut-il utiliser ?",
                        options: [
                            { text: "`Disallow: /mapage` dans robots.txt", isCorrect: false },
                            { text: "La balise `<meta name='robots' content='noindex'>` sur la page", isCorrect: true },
                            { text: "Supprimer la page du sitemap", isCorrect: false },
                            { text: "Bloquer l'IP de Google", isCorrect: false },
                        ],
                        explanation: "La directive `noindex` dans la balise meta robots est la méthode la plus fiable pour demander à Google de ne pas inclure une page spécifique dans son index. `Disallow` dans robots.txt empêche le crawl, mais la page peut quand même être indexée si elle a des liens externes.",
                        points: 15
                    }
                ]
            },
            {
                id: '2.6.2',
                title: 'Sitemaps XML',
                duration: 20,
                content: "Un sitemap XML est un fichier qui liste toutes les URLs importantes d'un site. Il aide les moteurs de recherche à découvrir et à crawler plus efficacement votre contenu, surtout pour les sites très grands ou avec une architecture complexe. Il peut aussi contenir des informations additionnelles comme la date de dernière modification.",
                questions: [
                    {
                        id: 'q2.6.2.1',
                        question: "Quel est le principal avantage d'un sitemap XML ?",
                        options: [
                            { text: "Garantir un meilleur classement pour toutes les pages listées", isCorrect: false },
                            { text: "Accélérer le temps de chargement du site", isCorrect: false },
                            { text: "Aider les moteurs à découvrir et comprendre la structure du site", isCorrect: true },
                            { text: "Bloquer l'accès des concurrents à votre site", isCorrect: false },
                        ],
                        explanation: "Un sitemap n'est pas un facteur de classement direct, mais il est crucial pour assurer que les moteurs de recherche peuvent trouver toutes vos pages importantes, ce qui est la première étape vers l'indexation et le classement.",
                        points: 12
                    }
                ]
            }
        ]
      },
      {
        id: '2.7',
        title: 'Données Structurées',
        lessons: [
            {
                id: '2.7.1',
                title: 'Introduction à Schema.org',
                duration: 25,
                content: "Les données structurées sont un format standardisé (utilisant le vocabulaire de Schema.org) pour fournir des informations sur une page et classer son contenu. Par exemple, sur une page recette, vous pouvez baliser les ingrédients, le temps de cuisson, etc. Google utilise ces données pour créer des 'Rich Snippets' (résultats enrichis) comme les étoiles d'avis, les FAQs ou les prix de produits directement dans la SERP.",
                questions: [
                    {
                        id: 'q2.7.1.1',
                        question: "Quel est le bénéfice le plus direct de l'ajout de données structurées (Schema.org) à une page ?",
                        options: [
                            { text: "Une augmentation garantie du classement de la page", isCorrect: false },
                            { text: "L'obtention potentielle de 'Rich Snippets' et une meilleure visibilité dans la SERP", isCorrect: true },
                            { text: "Une navigation plus facile pour l'utilisateur sur le site", isCorrect: false },
                            { text: "Un score PageSpeed Insights plus élevé", isCorrect: false },
                        ],
                        explanation: "Bien que ce ne soit pas un facteur de classement direct, les données structurées peuvent conduire à des résultats de recherche plus riches et plus attrayants (Rich Snippets), ce qui peut augmenter considérablement le taux de clic (CTR).",
                        points: 15
                    }
                ]
            }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Contenu & Mots-Clés",
    duration: "3-4h",
    description: "Rédaction SEO, recherche de mots-clés, intention de recherche et champ sémantique.",
    modules: [
        {
            id: '3.1',
            title: 'Recherche de Mots-Clés',
            lessons: [
                {
                    id: '3.1.1',
                    title: 'Choisir ses mots-clés',
                    duration: 25,
                    content: "Le choix des mots-clés repose sur 3 piliers : le volume de recherche (trafic potentiel), la difficulté de positionnement (concurrence), et l'intention de recherche (pertinence commerciale/informationnelle). Il faut trouver le bon équilibre.",
                    questions: [
                        {
                            id: 'q3.1.1.1',
                            question: "Quels sont les 3 critères ESSENTIELS pour choisir un mot-clé SEO pertinent ?",
                            options: [
                                { text: "Longueur du mot-clé", isCorrect: false },
                                { text: "Volume recherche + Difficulté + Intention", isCorrect: true },
                                { text: "Popularité sur réseaux sociaux", isCorrect: false },
                                { text: "Tendance Google Trends", isCorrect: false },
                            ],
                            explanation: "Les 3 piliers sont : 1. Volume de recherche (potentiel de trafic), 2. Difficulté de positionnement (concurrence), 3. Intention de l'utilisateur (Informationnelle, Transactionnelle, etc.).",
                            points: 15
                        },
                        {
                            id: 'q3.1.1.2',
                            question: "Qu'est-ce que la 'Longue Traine' (Long Tail) en SEO ?",
                            options: [
                                { text: "Mots-clés très populaires", isCorrect: false },
                                { text: "Requêtes 3+ mots, volume faible, ROI élevé", isCorrect: true },
                                { text: "Chaîne de liens externes", isCorrect: false },
                                { text: "Queue de distribution statistique", isCorrect: false },
                            ],
                            explanation: "La longue traîne (Long Tail) concerne des requêtes de 3 mots ou plus. Elles ont un faible volume de recherche individuel mais sont très spécifiques, moins concurrentielles et ont un excellent Retour sur Investissement (ROI).",
                            points: 12
                        }
                    ]
                }
            ]
        },
        {
            id: '3.2',
            title: 'Rédaction SEO Optimisée',
            lessons: [
                {
                    id: '3.2.1',
                    title: 'Créer du contenu de qualité',
                    duration: 30,
                    content: "Il n'y a pas de taille magique pour un contenu, mais des guides généraux existent. Un minimum de 300 mots est recommandé. L'optimal se situe souvent entre 800 et 1500 mots. L'important est de répondre entièrement à l'intention de l'utilisateur. Le concept E-E-A-T (Expertise, Experience, Authoritativeness, Trustworthiness) est aussi crucial.",
                    questions: [
                        {
                            id: 'q3.2.1.1',
                            question: "Quelle est la taille optimale d'un contenu pour le SEO ?",
                            options: [
                                { text: "Exactement 1000 mots (non-négociable)", isCorrect: false },
                                { text: "Ça dépend : il doit couvrir le sujet et répondre à l'intention", isCorrect: true },
                                { text: "Plus long = toujours meilleur", isCorrect: false },
                                { text: "Moins de 500 mots pour ne pas lasser le lecteur", isCorrect: false },
                            ],
                            explanation: "Il n'y a pas de règle stricte. La longueur idéale est celle qui répond de manière complète et exhaustive à l'intention de recherche de l'utilisateur, ce qui peut varier de 500 à 5000 mots.",
                            points: 10
                        },
                        {
                            id: 'q3.2.1.2',
                            question: "Qu'est-ce que l'E-E-A-T et pourquoi est-il de + en + critique en 2024 ?",
                            options: [
                                { text: "Système classement Google officiel", isCorrect: false },
                                { text: "Expertise, Expérience, Autorité, Confiance = Crédibilité", isCorrect: true },
                                { text: "Algorithme machine learning", isCorrect: false },
                                { text: "Acronyme marketing sans fondement", isCorrect: false },
                            ],
                            explanation: "E-E-A-T signifie Expertise, Experience, Authoritativeness, Trustworthiness (Expertise, Expérience, Autorité, Confiance). C'est un concept que Google utilise pour évaluer la crédibilité et la qualité d'une page, particulièrement critique pour les sujets 'YMYL' (Your Money Your Life).",
                            points: 12
                        }
                    ]
                }
            ]
        },
        {
            id: '3.3',
            title: 'Intention de Recherche',
            lessons: [
                {
                    id: '3.3.1',
                    title: 'Comprendre l\'utilisateur',
                    duration: 20,
                    content: "L'intention de recherche est le 'pourquoi' derrière une requête. On distingue 4 types principaux : Informationnelle (savoir), Navigationnelle (aller), Commerciale (comparer) et Transactionnelle (acheter). Aligner votre contenu avec l'intention est la clé du succès en SEO.",
                    questions: [
                        {
                            id: 'q3.3.1.1',
                            question: "Quelle est l'intention de recherche probable pour la requête 'meilleur smartphone photo 2024' ?",
                            options: [
                                { text: "Navigationnelle", isCorrect: false },
                                { text: "Commerciale (investigation)", isCorrect: true },
                                { text: "Informationnelle", isCorrect: false },
                                { text: "Transactionnelle", isCorrect: false },
                            ],
                            explanation: "L'utilisateur cherche à comparer des produits avant un achat potentiel. C'est une intention commerciale d'investigation, une étape avant l'intention transactionnelle ('acheter iPhone 15').",
                            points: 15
                        }
                    ]
                }
            ]
        },
        {
            id: '3.4',
            title: 'Stratégies de Contenu Avancées',
            lessons: [
                {
                    id: '3.4.1',
                    title: 'Topic Clusters & Pillar Pages',
                    duration: 25,
                    content: "Le modèle du 'Topic Cluster' (cocon sémantique) consiste à organiser le contenu autour d'un sujet principal. Vous créez une 'Pillar Page' (page pilier) très complète sur un sujet large (ex: 'guide du SEO'), puis de multiples 'Cluster Pages' (articles de blog) qui traitent en détail des sous-sujets spécifiques (ex: 'qu'est-ce qu'un backlink ?', 'recherche de mots-clés'). Toutes les cluster pages font un lien vers la pillar page, et la pillar page fait des liens vers les clusters. Cette structure montre à Google votre autorité sur un sujet donné.",
                    questions: [
                        {
                            id: 'q3.4.1.1',
                            question: "Dans un modèle de Topic Cluster, quel est le rôle de la 'Pillar Page' ?",
                            options: [
                                { text: "Répondre à une question très spécifique de longue traîne.", isCorrect: false },
                                { text: "Servir de page d'accueil pour le site web.", isCorrect: false },
                                { text: "Couvrir un sujet large de manière exhaustive et faire des liens vers des articles plus détaillés.", isCorrect: true },
                                { text: "Obtenir des backlinks depuis des sites externes.", isCorrect: false },
                            ],
                            explanation: "La Pillar Page est la pièce maîtresse qui traite d'un sujet principal de manière globale. Elle sert de hub central pour tous les contenus de 'cluster' plus spécifiques, créant ainsi un maillage interne sémantiquement riche.",
                            points: 15
                        }
                    ]
                }
            ]
        }
    ]
  },
  {
    id: 4,
    title: "Netlinking",
    duration: "3-4h",
    description: "Backlinks, autorité, stratégies d'acquisition et analyse de profil.",
    modules: [
        {
            id: '4.1',
            title: 'Backlinks & Autorité',
            lessons: [
                {
                    id: '4.1.1',
                    title: 'La puissance des liens',
                    duration: 30,
                    content: "Un backlink est un lien pointant vers votre site depuis un site externe. C'est un signal de popularité et de confiance, qui pèse pour 30-40% du classement SEO. La qualité d'un backlink dépend de l'autorité du site source, de sa pertinence thématique, du texte d'ancrage et de son placement.",
                    questions: [
                        {
                            id: 'q4.1.1.1',
                            question: "Qu'est-ce qu'un Backlink exactement et quel est son rôle en SEO ?",
                            options: [
                                { text: "Lien vers page antérieure du site", isCorrect: false },
                                { text: "Lien entrant depuis site externe = Signal popularité", isCorrect: true },
                                { text: "Lien cassé sur site", isCorrect: false },
                                { text: "Lien sponsorisé", isCorrect: false },
                            ],
                            explanation: "Un backlink est un lien entrant depuis un site externe. Il agit comme un vote de confiance et de popularité, transmettant de l'autorité (PageRank) et influençant fortement le classement.",
                            points: 15
                        },
                        {
                            id: 'q4.1.1.2',
                            question: "Ordonnez les facteurs de qualité d'un backlink par importance",
                            options: [
                                { text: "Ancre > Autorité > Pertinence > Placement", isCorrect: false },
                                { text: "Autorité > Pertinence > Ancre > Placement", isCorrect: true },
                                { text: "Tous égaux", isCorrect: false },
                                { text: "Placement > Pertinence > Autorité > Ancre", isCorrect: false },
                            ],
                            explanation: "L'ordre d'importance est : 1. l'Autorité du site source, 2. la Pertinence thématique, 3. l'Ancre (texte du lien), et 4. le Placement du lien sur la page.",
                            points: 15
                        },
                        {
                            id: 'q4.1.1.3',
                            question: "VRAI ou FAUX: Acheter des liens pour le SEO est une excellente stratégie pour gagner du trafic rapidement.",
                            options: [
                                { text: "Vrai", isCorrect: false },
                                { text: "Faux", isCorrect: true },
                            ],
                            explanation: "FAUX. L'achat de liens est une pratique 'Black Hat' qui viole les consignes de Google et expose le site à un risque élevé de pénalité manuelle ou algorithmique, pouvant entraîner une perte drastique de trafic.",
                            points: 12
                        }
                    ]
                }
            ]
        },
        {
            id: '4.2',
            title: 'Stratégies de Netlinking',
            lessons: [
                {
                    id: '4.2.1',
                    title: 'Acquérir des liens de qualité',
                    duration: 30,
                    content: "Il existe de nombreuses stratégies 'White Hat' pour obtenir des backlinks : le guest blogging (écrire pour d'autres sites), le link baiting (créer un contenu si bon que les autres veulent y faire un lien), la réparation de liens cassés, ou encore la création d'études et d'infographies originales.",
                    questions: [
                        {
                            id: 'q4.2.1.1',
                            question: "Quelle stratégie consiste à créer un contenu exceptionnel pour attirer naturellement des liens ?",
                            options: [
                                { text: "Guest blogging", isCorrect: false },
                                { text: "Link baiting", isCorrect: true },
                                { text: "Achat de liens", isCorrect: false },
                                { text: "Échange de liens", isCorrect: false },
                            ],
                            explanation: "Le 'Link baiting' (pêche aux liens) est l'art de créer un contenu tellement utile, unique ou divertissant qu'il génère des backlinks de manière organique.",
                            points: 12
                        }
                    ]
                }
            ]
        },
        {
            id: '4.3',
            title: 'Analyse du Profil de Liens',
            lessons: [
                {
                    id: '4.3.1',
                    title: 'Analyser son profil de backlinks',
                    duration: 25,
                    content: "Analyser son profil de liens (et celui des concurrents) est crucial. Des outils comme Ahrefs, SEMrush ou Majestic permettent de suivre des métriques clés : le nombre de domaines référents, l'évolution de l'autorité (DA/DR), la répartition des textes d'ancrage, et l'identification de liens potentiellement 'toxiques' (issus de sites de spam, d'annuaires de mauvaise qualité, etc.). Un profil de liens sain est diversifié et naturel.",
                    questions: [
                        {
                            id: 'q4.3.1.1',
                            question: "Lors de l'analyse d'un profil de backlinks, quel signe est le plus inquiétant ?",
                            options: [
                                { text: "Une grande majorité de liens avec l'ancre 'cliquez ici'.", isCorrect: false },
                                { text: "Une augmentation soudaine et massive de liens depuis des domaines russes de faible qualité.", isCorrect: true },
                                { text: "De nombreux liens provenant de sites de la même thématique que le vôtre.", isCorrect: false },
                                { text: "Un score de Domain Authority (DA) de 30.", isCorrect: false },
                            ],
                            explanation: "Une augmentation soudaine et non naturelle de liens de faible qualité est un signal d'alarme majeur de spam ou de netlinking négatif. Cela peut entraîner une pénalité de la part de Google.",
                            points: 15
                        }
                    ]
                }
            ]
        }
    ]
  },
  {
    id: 5,
    title: "Cas Spécialisés & Outils",
    duration: "4-5h",
    description: "Local, E-commerce, International, Pénalités et les outils indispensables du SEO.",
    modules: [
        {
            id: '5.1',
            title: 'SEO Local & E-commerce',
            lessons: [
                {
                    id: '5.1.1',
                    title: 'Optimisations spécifiques',
                    duration: 35,
                    content: "Le SEO Local vise à optimiser pour les recherches géolocalisées, principalement via une fiche Google Business Profile (GBP) bien remplie. Le SEO pour l'e-commerce présente des défis uniques comme la gestion du contenu dupliqué (variantes de produits), la pagination, et les filtres à facettes.",
                    questions: [
                        {
                            id: 'q5.1.1.1',
                            question: "Quel est l'outil n°1 et gratuit pour le SEO Local ?",
                            options: [
                                { text: "Google Business Profile (ex-GMB)", isCorrect: true },
                                { text: "Yelp", isCorrect: false },
                                { text: "Facebook Page", isCorrect: false },
                                { text: "TripAdvisor", isCorrect: false },
                            ],
                            explanation: "Google Business Profile est l'outil gratuit et indispensable pour apparaître dans le 'Local Pack' de Google et sur Google Maps. C'est le pilier de toute stratégie de SEO local.",
                            points: 12
                        },
                        {
                            id: 'q5.1.1.2',
                            question: "Quel est le défi technique SEO le plus courant sur un site e-commerce ?",
                            options: [
                                { text: "La vitesse de chargement", isCorrect: false },
                                { text: "Le contenu dupliqué généré par les filtres et variantes", isCorrect: true },
                                { text: "Le manque de backlinks", isCorrect: false },
                                { text: "La sécurité des paiements", isCorrect: false },
                            ],
                            explanation: "La gestion du contenu dupliqué, causée par les filtres (couleur, taille, etc.) et les variantes de produits qui créent de multiples URLs pour un contenu quasi-identique, est un défi majeur pour les sites e-commerce.",
                            points: 15
                        }
                    ]
                }
            ]
        },
        {
            id: '5.2',
            title: 'Pénalités & Récupération',
            lessons: [
                {
                    id: '5.2.1',
                    title: 'Identifier et corriger',
                    duration: 20,
                    content: "Google peut appliquer deux types de pénalités : manuelles (signalées dans la Search Console) et algorithmiques (non signalées, plus difficiles à diagnostiquer). Les causes sont souvent des liens toxiques ou du contenu de très faible qualité.",
                    questions: [
                        {
                            id: 'q5.2.1.1',
                            question: "Où pouvez-vous vérifier si votre site a reçu une pénalité MANUELLE ?",
                            options: [
                                { text: "Dans Google Analytics", isCorrect: false },
                                { text: "Dans la section 'Actions manuelles' de Google Search Console", isCorrect: true },
                                { text: "En contactant le support Google", isCorrect: false },
                                { text: "Nulle part, c'est une information secrète", isCorrect: false },
                            ],
                            explanation: "Les pénalités manuelles, infligées par un employé de Google, sont toujours notifiées dans un rapport dédié dans la Google Search Console.",
                            points: 15
                        }
                    ]
                }
            ]
        },
        {
            id: '5.3',
            title: 'Outils SEO Indispensables',
            lessons: [
                {
                    id: '5.3.1',
                    title: 'La boîte à outils du SEO',
                    duration: 25,
                    content: "Aucun professionnel du SEO ne travaille sans outils. Les incontournables gratuits sont Google Search Console (pour le suivi technique) et Google Analytics (pour le suivi du trafic). Les outils payants comme Ahrefs, SEMrush ou Majestic sont des suites complètes pour l'analyse de mots-clés, de backlinks et de la concurrence.",
                    questions: [
                        {
                            id: 'q5.3.1.1',
                            question: "Quel outil GRATUIT de Google est essentiel pour surveiller la santé technique de votre site ?",
                            options: [
                                { text: "Google Trends", isCorrect: false },
                                { text: "Google Analytics", isCorrect: false },
                                { text: "Google Search Console", isCorrect: true },
                                { text: "Google Keyword Planner", isCorrect: false },
                            ],
                            explanation: "Google Search Console est l'outil de communication directe entre Google et les webmasters. Il permet de suivre l'indexation, les erreurs de crawl, les performances de recherche et de recevoir des alertes de sécurité ou des notifications de pénalités manuelles.",
                            points: 15
                        }
                    ]
                }
            ]
        },
        {
            id: '5.4',
            title: 'SEO International',
            lessons: [
                {
                    id: '5.4.1',
                    title: 'La balise Hreflang',
                    duration: 25,
                    content: "Quand un site cible plusieurs pays ou langues, il est crucial d'indiquer à Google la bonne version à afficher pour chaque utilisateur. La balise `hreflang` est un attribut HTML qui spécifie la langue et, optionnellement, la région d'une page. Par exemple, `<link rel='alternate' hreflang='fr-ca' href='http://example.com/ca/'>` indique la version pour les francophones du Canada. Une mauvaise implémentation peut causer des problèmes de contenu dupliqué ou un mauvais ciblage.",
                    questions: [
                        {
                            id: 'q5.4.1.1',
                            question: "Un site a une version pour la France (fr-fr) et une pour la Belgique francophone (fr-be). Sur la page française, quelle balise `hreflang` est OBLIGATOIRE en plus de celle pour la Belgique ?",
                            options: [
                                { text: "Une balise `hreflang='en-us'` pour les États-Unis.", isCorrect: false },
                                { text: "Aucune autre, celle pour la Belgique suffit.", isCorrect: false },
                                { text: "Une balise 'self-referencing' `hreflang='fr-fr'` pointant vers la page elle-même.", isCorrect: true },
                                { text: "Une balise `hreflang='fr'` générique.", isCorrect: false },
                            ],
                            explanation: "Les implémentations `hreflang` doivent inclure un lien de référence propre (self-referencing). Chaque page doit avoir une balise `hreflang` qui pointe vers elle-même, en plus des balises pointant vers les autres versions linguistiques/régionales.",
                            points: 15
                        }
                    ]
                }
            ]
        }
    ]
  }
];