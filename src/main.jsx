import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/app.css'

const navItems = [
  { text: 'Home', href: '/' },
  { text: 'Research', href: '/research.html' },
  { text: 'Team', href: '/team.html' },
  { text: 'Publications', href: '/publications.html' },
  { text: 'Contact', href: '/contact.html' }
]

const pageTitles = {
  '/': 'Luo Lab',
  '/index.html': 'Luo Lab',
  '/research.html': 'Research Areas | Luo Lab',
  '/team.html': 'Team | Luo Lab',
  '/publications.html': 'Publications | Luo Lab',
  '/contact.html': 'Contact Us | Luo Lab'
}

const researchAreas = [
  'Medical AI Models',
  'Reinforcement Learning for Medical LLMs',
  'Multimodal Medical Data Analysis',
  'Multi-omics Data Analysis',
  'Computational Biology'
]

const newsItems = [
  <>
    <strong data-v-ee69fdec>2026-06</strong>: 🎓 Yonghao Zhao graduated and started PhD program at{' '}
    <img className="inline-news-icon" src="/images/cuanschutz.png" alt="CU Anschutz logo" /> CU Anschutz Medical Campus
  </>,
  <>
    <strong data-v-ee69fdec>2026-02</strong>: 📄 <strong data-v-ee69fdec>BiTro</strong> paper uploaded on arXiv
  </>,
  <>
    <strong data-v-ee69fdec>2026-02</strong>: 📄 <strong data-v-ee69fdec>DeSCENT</strong> paper uploaded on bioRxiv
  </>,
      <>
        <strong data-v-ee69fdec>2026-01</strong>: 📄 Survival analysis paper published in{' '}
        <strong data-v-ee69fdec>Artificial Intelligence in Medicine</strong>
      </>,
  <>
    <strong data-v-ee69fdec>2025-07</strong>: 🏆 Undergraduate students Jingkun Yu and Guangkai Shang won
    the <strong data-v-ee69fdec>First Prize</strong> at the National AI Innovation Track of the China
    Robotics and Artificial Intelligence Competition
  </>
]

const graduateStudents = [
  {
    name: 'Linjun Dai (戴林均)',
    image: '/images/dailinjun.png',
    alt: 'Linjun Dai',
    details: [
      ['Email', 'vox.dai@my.swjtu.edu.cn'],
      ['Research', 'Bulk, single-cell, and image-enhanced survival prediction']
    ]
  },
  {
    name: 'Shixin Wang (王世鑫)',
    image: '/images/wangshixin.jpg',
    alt: 'Shixin Wang',
    details: [
      ['Email', '3191903527@qq.com'],
      ['Research', 'Novel deconvolution methods']
    ]
  },
  {
    name: 'Zeyu You (游泽宇)',
    image: '/images/youzeyu.jpg',
    alt: 'Zeyu You',
    details: [
      ['Email', 'hunchgray@my.swjtu.edu.cn'],
      ['Research', 'Single-cell and bulk deconvolution-enhanced survival prediction']
    ]
  }
]

const undergraduateStudents = [
  {
    name: 'Jingkun Yu (于景坤)',
    image: '/images/yujingkun.jpg',
    alt: 'Jingkun Yu',
    details: [
      ['Year', 'Junior'],
      ['Email', 'yujingkun05@163.com'],
      ['Research', 'Computational biology, multiomics, medical image'],
      ['GitHub', <a href="https://github.com/yujingkun1" target="_blank">https://github.com/yujingkun1</a>]
    ]
  },
  {
    name: 'Xu Han (韩煦)',
    image: '/images/hanxu.jpg',
    alt: 'Xu Han',
    details: [
      ['Year', 'Junior'],
      ['Email', '18200468058@163.com'],
      ['Research', 'Reinforcement learning for medical large language models']
    ]
  },
  {
    name: 'Guangkai Shang (商光楷)',
    image: '/images/shangguangkai.jpg',
    alt: 'Guangkai Shang',
    details: [
      ['Year', 'Junior'],
      ['Email', 'guangkaishang@163.com'],
      ['Research', 'AI for Biology, Spatial Transcriptomics']
    ]
  },
  {
    name: 'Xihua Gao (高熙骅)',
    image: '/images/gaoxihua.jpg',
    alt: 'Xihua Gao',
    details: [
      ['Year', 'Sophomore'],
      ['Email', '1873186258@qq.com'],
      ['Research', 'Reinforcement learning for medical large language models']
    ]
  },
  {
    name: 'Su Wang (王溯)',
    image: '/images/wangsu.jpg',
    alt: 'Su Wang',
    details: [
      ['Year', 'Sophomore'],
      ['Email', 'SuWang2006@outlook.com'],
      ['Research', 'Medical large language models']
    ]
  },
  {
    name: 'Zihan Huang (黄子涵)',
    image: '/images/huangzihan.jpg',
    alt: 'Zihan Huang',
    details: [
      ['Year', 'Sophomore'],
      ['Email', 'zihan_huang@my.swjtu.edu.cn'],
      ['Research', 'Medical large language models']
    ]
  }
]

const publications = [
  {
    image: '/images/survival.png',
    alt: 'Survival Analysis',
    title: 'Tackling Small Sample Survival Analysis via Transfer Learning: A Study of Colorectal Cancer Prognosis',
    authors: (
      <>
        <strong>Yonghao Zhao</strong>, Changtao Li, Chi Shu, Qingbin Wu, Hong Li, Chuan Xu, Tianrui Li,
        Ziqiang Wang, Zhipeng Luo, Yazhou He
      </>
    ),
    venue: 'Artificial Intelligence in Medicine, Volume 178, 2026 (Published: January 2026)',
    links: [
      ['Paper', 'https://www.sciencedirect.com/science/article/pii/S0933365726000783'],
      ['arXiv', 'https://arxiv.org/abs/2501.12421'],
      ['Code', 'https://github.com/YonghaoZhao722/TSF']
    ],
    bordered: true
  },
  {
    image: '/images/BiTro.png',
    alt: 'BiTro',
    title: 'BiTro: Bidirectional Transfer Learning Enhances Bulk and Spatial Transcriptomics Prediction in Cancer Pathological Images',
    authors: (
      <>
        <strong>Jingkun Yu</strong>, <strong>Guangkai Shang</strong>, Changtao Li, Xun Gong, Tianrui Li,
        Yazhou He, Zhipeng Luo
      </>
    ),
    venue: 'arXiv preprint, 2026',
    links: [
      ['arXiv', 'https://arxiv.org/abs/2603.14897'],
      ['Code', 'https://github.com/yujingkun1/BiTro']
    ],
    bordered: true
  },
  {
    image: '/images/DeSCENT.png',
    alt: 'DeSCENT',
    title: 'DeSCENT: Deconvolutional Single-Cell Enhances Transcriptome-based Cancer Survival Analysis',
    authors: (
      <>
        <strong>Yonghao Zhao</strong>, Zeyu You, Yu Shen, Jielei Chu, Xun Gong, Tianrui Li, Ziqiang Wang,
        Chuan Xu, Zhipeng Luo, Yazhou He
      </>
    ),
    venue: 'bioRxiv preprint, 2026',
    links: [
      ['bioRxiv', 'https://www.biorxiv.org/content/10.64898/2026.03.15.711877v1.abstract'],
      ['Code', 'https://github.com/YonghaoZhao722/DeSCENT']
    ]
  }
]

function normalizePath(pathname) {
  if (pathname === '' || pathname === '/') return '/'
  return pathname.endsWith('/') ? `${pathname.slice(0, -1)}.html` : pathname
}

function usePathname() {
  const [pathname, setPathname] = useState(normalizePath(window.location.pathname))

  useEffect(() => {
    const onPopState = () => setPathname(normalizePath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return [pathname, setPathname]
}

function HeaderAnchor({ id, title }) {
  return (
    <a className="header-anchor" href={`#${id}`} aria-label={`Permalink to "${title}"`}>
      ​
    </a>
  )
}

function NavLink({ item, active, onNavigate }) {
  return (
    <a
      className={`VPLink link VPNavBarMenuLink${active ? ' active' : ''}`}
      href={item.href}
      tabIndex="0"
      data-v-dc692963
      data-v-e56f3d57
      onClick={onNavigate}
    >
      <span data-v-e56f3d57>{item.text}</span>
    </a>
  )
}

function AppearanceSwitch() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <button
      className="VPSwitch VPSwitchAppearance"
      type="button"
      role="switch"
      title="Toggle dark mode"
      aria-checked={dark}
      data-v-6c893767
      data-v-5337faa4
      data-v-1d5665e3
      onClick={() => setDark((value) => !value)}
    >
      <span className="check" data-v-1d5665e3>
        <span className="icon" data-v-1d5665e3>
          <span className="vpi-sun sun" data-v-5337faa4 />
          <span className="vpi-moon moon" data-v-5337faa4 />
        </span>
      </span>
    </button>
  )
}

function Header({ pathname, setPathname }) {
  const [screenOpen, setScreenOpen] = useState(false)

  const onNavigate = (event) => {
    const href = event.currentTarget.getAttribute('href')
    if (!href?.startsWith('/')) return
    event.preventDefault()
    window.history.pushState(null, '', href)
    setPathname(normalizePath(href))
    setScreenOpen(false)
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <span tabIndex="-1" data-v-0b0ada53 />
      <a href="#VPContent" className="VPSkipLink visually-hidden" data-v-0b0ada53>
        Skip to content
      </a>
      <header className="VPNav" data-v-5d98c3a5 data-v-ae24b3ad>
        <div className="VPNavBar" data-v-ae24b3ad data-v-6aa21345>
          <div className="wrapper" data-v-6aa21345>
            <div className="container" data-v-6aa21345>
              <div className="title" data-v-6aa21345>
                <div className="VPNavBarTitle" data-v-6aa21345 data-v-1168a8e4>
                  <a className="title" href="/" data-v-1168a8e4 onClick={onNavigate}>
                    <span data-v-1168a8e4>Luo Lab</span>
                  </a>
                </div>
              </div>
              <div className="content" data-v-6aa21345>
                <div className="content-body" data-v-6aa21345>
                  <div className="VPNavBarSearch search" data-v-6aa21345 />
                  <nav
                    aria-labelledby="main-nav-aria-label"
                    className="VPNavBarMenu menu"
                    data-v-6aa21345
                    data-v-dc692963
                  >
                    <span id="main-nav-aria-label" className="visually-hidden" data-v-dc692963>
                      {' '}
                      Main Navigation{' '}
                    </span>
                    {navItems.map((item) => (
                      <NavLink
                        key={item.href}
                        item={item}
                        active={pathname === item.href || (pathname === '/index.html' && item.href === '/')}
                        onNavigate={onNavigate}
                      />
                    ))}
                  </nav>
                  <div className="VPNavBarAppearance appearance" data-v-6aa21345 data-v-6c893767>
                    <AppearanceSwitch />
                  </div>
                  <div
                    className="VPSocialLinks VPNavBarSocialLinks social-links"
                    data-v-6aa21345
                    data-v-0394ad82
                    data-v-7bc22406
                  />
                  <div
                    className="VPFlyout VPNavBarExtra extra"
                    data-v-6aa21345
                    data-v-bb2aa2f0
                    data-v-cf11d7a2
                  >
                    <button
                      type="button"
                      className="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-label="extra navigation"
                      data-v-cf11d7a2
                    >
                      <span className="vpi-more-horizontal icon" data-v-cf11d7a2 />
                    </button>
                    <div className="menu" data-v-cf11d7a2>
                      <div className="VPMenu" data-v-cf11d7a2 data-v-b98bc113>
                        <div className="group" data-v-bb2aa2f0>
                          <div className="item appearance" data-v-bb2aa2f0>
                            <p className="label" data-v-bb2aa2f0>
                              Appearance
                            </p>
                            <div className="appearance-action" data-v-bb2aa2f0>
                              <AppearanceSwitch />
                            </div>
                          </div>
                        </div>
                        <div className="group" data-v-bb2aa2f0>
                          <div className="item social-links" data-v-bb2aa2f0>
                            <div className="VPSocialLinks social-links-list" data-v-bb2aa2f0 data-v-7bc22406 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="VPNavBarHamburger hamburger"
                    aria-label="mobile navigation"
                    aria-expanded={screenOpen}
                    aria-controls="VPNavScreen"
                    data-v-6aa21345
                    data-v-e5dd9c1c
                    onClick={() => setScreenOpen((value) => !value)}
                  >
                    <span className="container" data-v-e5dd9c1c>
                      <span className="top" data-v-e5dd9c1c />
                      <span className="middle" data-v-e5dd9c1c />
                      <span className="bottom" data-v-e5dd9c1c />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="divider" data-v-6aa21345>
            <div className="divider-line" data-v-6aa21345 />
          </div>
        </div>
      </header>
      {screenOpen && (
        <div className="VPNavScreen" id="VPNavScreen" data-v-f2779853>
          <div className="container" data-v-f2779853>
            <nav className="menu" data-v-f2779853>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="VPNavScreenMenuLink"
                  href={item.href}
                  data-v-df37e6dd
                  onClick={onNavigate}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

function LocalNav() {
  return null
}

function DocShell({ pageClass, children }) {
  return (
    <div className="VPContent" id="VPContent" data-v-5d98c3a5 data-v-1428d186>
      <div className="VPDoc has-aside" data-v-1428d186 data-v-39a288b8>
        <div className="container" data-v-39a288b8>
          <div className="aside" data-v-39a288b8>
            <div className="aside-curtain" data-v-39a288b8 />
            <div className="aside-container" data-v-39a288b8>
              <div className="aside-content" data-v-39a288b8>
                <div className="VPDocAside" data-v-39a288b8 data-v-3f215769>
                  <nav aria-labelledby="doc-outline-aria-label" className="VPDocAsideOutline" data-v-3f215769 data-v-a5bbad30>
                    <div className="content" data-v-a5bbad30>
                      <div className="outline-marker" data-v-a5bbad30 />
                      <div aria-level="2" className="outline-title" id="doc-outline-aria-label" role="heading" data-v-a5bbad30>
                        On this page
                      </div>
                      <ul className="VPDocOutlineItem root" data-v-a5bbad30 data-v-b933a997 />
                    </div>
                  </nav>
                  <div className="spacer" data-v-3f215769 />
                </div>
              </div>
            </div>
          </div>
          <div className="content" data-v-39a288b8>
            <div className="content-container" data-v-39a288b8>
              <main className="main" data-v-39a288b8>
                <div style={{ position: 'relative' }} className={`vp-doc ${pageClass}`} data-v-39a288b8>
                  <div>{children}</div>
                </div>
              </main>
              <footer className="VPDocFooter" data-v-39a288b8 data-v-e257564d />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AppFooter() {
  return (
    <footer className="VPFooter" data-v-5d98c3a5 data-v-e315a0ad>
      <div className="container" data-v-e315a0ad>
        <p className="message" data-v-e315a0ad>
          Luo Lab - Southwest Jiaotong University
        </p>
        <p className="copyright" data-v-e315a0ad>
          Copyright © 2024
        </p>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <DocShell pageClass="_">
      <div data-v-ee69fdec>
        <div className="home-wrapper" data-v-ee69fdec>
          <div className="logo-sidebar" data-v-ee69fdec>
            <img src="/images/luo-lab-mark.svg?v=20260609c" alt="Luo Lab" data-v-ee69fdec />
            <h3 data-v-ee69fdec>Luo Lab</h3>
            <p data-v-ee69fdec>
              Southwest Jiaotong
              <br data-v-ee69fdec />
              University (SWJTU)
            </p>
            <p className="location" data-v-ee69fdec>
              Chengdu, China
            </p>
          </div>
          <div className="main-content" data-v-ee69fdec>
            <h1 data-v-ee69fdec>Luo Lab</h1>
            <p className="subtitle" data-v-ee69fdec>
              Southwest Jiaotong University
            </p>
            <p className="description" data-v-ee69fdec>
              We are a research group focusing on <strong data-v-ee69fdec>AI for Biology and Medicine</strong>, led by{' '}
              <a href="https://faculty.swjtu.edu.cn/luozhipeng/zh_CN/index.htm" data-v-ee69fdec>
                Prof. Zhipeng Luo
              </a>
              . Our work spans biomedical data science, medical AI, and computational biology.
            </p>
            <h2 id="research-areas" tabIndex="-1" data-v-ee69fdec>
              Research Areas <HeaderAnchor id="research-areas" title="Research Areas" />
            </h2>
            <ul data-v-ee69fdec>
              {researchAreas.map((area) => (
                <li key={area} data-v-ee69fdec>
                  {area}
                </li>
              ))}
            </ul>
            <hr data-v-ee69fdec />
            <h2 id="latest-news" tabIndex="-1" data-v-ee69fdec>
              Latest News <HeaderAnchor id="latest-news" title="Latest News" />
            </h2>
            <ul data-v-ee69fdec>
              {newsItems.map((item, index) => (
                <li key={index} data-v-ee69fdec>
                  {item}
                </li>
              ))}
            </ul>
            <hr data-v-ee69fdec />
            <h2 id="collaboration" tabIndex="-1" data-v-ee69fdec>
              Collaboration <HeaderAnchor id="collaboration" title="Collaboration" />
            </h2>
            <p data-v-ee69fdec>
              We collaborate closely with Prof. Yazhou He's team at West China Hospital, Sichuan University.
            </p>
          </div>
        </div>
      </div>
    </DocShell>
  )
}

function ResearchPage() {
  return (
    <DocShell pageClass="_research">
      <h1 id="research-areas" tabIndex="-1">
        Research Areas <HeaderAnchor id="research-areas" title="Research Areas" />
      </h1>
      <h2 id="single-cell-bulk-data-integration" tabIndex="-1">
        Single-Cell &amp; Bulk Data Integration{' '}
        <HeaderAnchor id="single-cell-bulk-data-integration" title="Single-Cell & Bulk Data Integration" />
      </h2>
      <p>
        We develop computational methods to enhance survival prediction by integrating single-cell sequencing data with
        bulk RNA-seq data. Our approaches leverage the high resolution of single-cell data to improve prognostic models.
      </p>
      <p>
        <strong>Key Projects:</strong>
      </p>
      <ul>
        <li>Single-cell and bulk deconvolution-enhanced survival prediction</li>
        <li>Bulk, single-cell, and image-enhanced survival prediction</li>
      </ul>
      <hr />
      <h2 id="spatial-transcriptomics" tabIndex="-1">
        Spatial Transcriptomics <HeaderAnchor id="spatial-transcriptomics" title="Spatial Transcriptomics" />
      </h2>
      <p>
        Our lab focuses on AI-driven analysis of spatial transcriptomics data, enabling the study of gene expression
        patterns in their spatial context within tissues.
      </p>
      <p>
        <strong>Key Projects:</strong>
      </p>
      <ul>
        <li>AI for spatial transcriptomics analysis</li>
        <li>Spatial biology data integration</li>
      </ul>
      <hr />
      <h2 id="deconvolution-methods" tabIndex="-1">
        Deconvolution Methods <HeaderAnchor id="deconvolution-methods" title="Deconvolution Methods" />
      </h2>
      <p>We are developing novel computational deconvolution methods to estimate cell-type composition from bulk tissue samples.</p>
      <p>
        <strong>Key Projects:</strong>
      </p>
      <ul>
        <li>Novel deconvolution algorithms</li>
        <li>Benchmarking deconvolution approaches</li>
      </ul>
      <hr />
      <h2 id="medical-ai-large-language-models" tabIndex="-1">
        Medical AI &amp; Large Language Models{' '}
        <HeaderAnchor id="medical-ai-large-language-models" title="Medical AI & Large Language Models" />
      </h2>
      <p>
        We apply reinforcement learning and other AI techniques to develop medical large language models for clinical
        applications.
      </p>
      <p>
        <strong>Key Projects:</strong>
      </p>
      <ul>
        <li>Reinforcement learning for medical LLMs</li>
        <li>Clinical decision support systems</li>
      </ul>
      <hr />
      <h2 id="multimodal-medical-data-analysis" tabIndex="-1">
        Multimodal Medical Data Analysis{' '}
        <HeaderAnchor id="multimodal-medical-data-analysis" title="Multimodal Medical Data Analysis" />
      </h2>
      <p>
        We build platforms for analyzing multimodal medical data, including the "Shukang Zhihui" family health portrait
        platform.
      </p>
      <p>
        <strong>Key Projects:</strong>
      </p>
      <ul>
        <li>Family health portrait multimodal analysis platform</li>
        <li>Integration of clinical, imaging, and genomic data</li>
      </ul>
    </DocShell>
  )
}

function PersonCard({ person, principal = false, compact = false }) {
  return (
    <div className={`person-card${principal ? ' person-card--principal' : ''}${compact ? ' person-card--compact' : ''}`}>
      {person.placeholder ? (
        <div className="person-card-photo person-card-photo--placeholder">
          <span>Photo TBA</span>
        </div>
      ) : (
        <img className="person-card-photo" src={person.image} alt={person.alt} />
      )}
      <div className="person-card-body">
        <h3>{person.name}</h3>
        {person.details.map(([label, value]) => (
          <p key={label}>
            <strong>{label}:</strong> {value}
          </p>
        ))}
      </div>
    </div>
  )
}

function PublicationIcon({ label }) {
  const normalized = label.toLowerCase()

  if (normalized === 'code') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.074.55-.17.55-.38 0-.19-.007-.693-.01-1.36-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.001 8.001 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    )
  }

  if (normalized === 'arxiv') {
    return <span className="publication-link-mark">ar</span>
  }

  if (normalized === 'biorxiv') {
    return <span className="publication-link-mark">bio</span>
  }

  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0Zm0 1.4 3.1 3.1H11a1.5 1.5 0 0 1-1.5-1.5V1.4ZM4 1h4.5v2A2.5 2.5 0 0 0 11 5.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm1 7h6v1H5V8Zm0 2.5h6v1H5v-1Zm0 2.5h4v1H5v-1Z" />
    </svg>
  )
}

function TeamPage() {
  return (
    <DocShell pageClass="_team">
      <h1 id="team" tabIndex="-1">
        Team <HeaderAnchor id="team" title="Team" />
      </h1>
      <h2 id="principal-investigator" tabIndex="-1">
        Principal Investigator <HeaderAnchor id="principal-investigator" title="Principal Investigator" />
      </h2>
      <PersonCard
        principal
        person={{
          name: 'Prof. Zhipeng Luo (罗志鹏)',
          image: '/images/luozhipeng.png',
          alt: 'Prof. Zhipeng Luo',
          details: [
            ['Position', 'Professor'],
            ['Email', 'luozhipeng@swjtu.edu.cn'],
            ['Research', 'Statistical machine learning theory, Biomedical big data analysis'],
            [
              'Homepage',
              <a href="https://faculty.swjtu.edu.cn/luozhipeng/zh_CN/index.htm" target="_blank">
                https://faculty.swjtu.edu.cn/luozhipeng/zh_CN/index.htm
              </a>
            ]
          ]
        }}
      />
      <hr />
      <h2 id="graduate-students" tabIndex="-1">
        Graduate Students <HeaderAnchor id="graduate-students" title="Graduate Students" />
      </h2>
      {graduateStudents.map((person) => (
        <PersonCard key={person.name} person={person} />
      ))}
      <hr />
      <h2 id="undergraduate-students" tabIndex="-1">
        Undergraduate Students <HeaderAnchor id="undergraduate-students" title="Undergraduate Students" />
      </h2>
      <div className="undergraduate-grid">
        {undergraduateStudents.map((person) => (
          <PersonCard key={person.name} person={person} compact />
        ))}
      </div>
      <hr />
      <h2 id="alumni" tabIndex="-1">
        Alumni <HeaderAnchor id="alumni" title="Alumni" />
      </h2>
      <PersonCard
        person={{
          name: 'Yonghao Zhao (赵永豪)',
          image: '/images/zhaoyonghao.jpg',
          alt: 'Yonghao Zhao',
          details: [
            ['Graduation', 'June 2026'],
            ['Email', 'yonghao.zhao@cuanschutz.edu'],
            ['Current Position', 'PhD Student, University of Colorado Anschutz Medical Campus'],
            ['Research', 'Computational biology, scRNA-seq / Spatial-omics'],
            [
              'Homepage',
              <a href="https://yonghaoz.com/" target="_blank">
                https://yonghaoz.com/
              </a>
            ]
          ]
        }}
      />
      <hr />
      <h2 id="collaborators" tabIndex="-1">
        Collaborators <HeaderAnchor id="collaborators" title="Collaborators" />
      </h2>
      <h3 id="prof-yazhou-he-何亚舟" tabIndex="-1">
        Prof. Yazhou He (何亚舟) <HeaderAnchor id="prof-yazhou-he-何亚舟" title="Prof. Yazhou He (何亚舟)" />
      </h3>
      <p>
        <strong>Affiliation:</strong> West China Hospital, Sichuan University
        <br />
        <strong>Collaboration:</strong> Joint research on computational biomedicine
      </p>
      <hr />
      <h2 id="join-us" tabIndex="-1">
        Join Us <HeaderAnchor id="join-us" title="Join Us" />
      </h2>
      <p>
        We are looking for motivated students. Please contact Prof. Luo at{' '}
        <a href="mailto:luozhipeng@swjtu.edu.cn" target="_blank" rel="noreferrer">
          luozhipeng@swjtu.edu.cn
        </a>
      </p>
    </DocShell>
  )
}

function PublicationItem({ publication }) {
  return (
    <article className={`publication-item${publication.bordered ? ' publication-item--bordered' : ''}`}>
      <a className="publication-figure" href={publication.links[0]?.[1]} target="_blank" rel="noreferrer">
        <img src={publication.image} alt={publication.alt} />
      </a>
      <div className="publication-content">
        <h3 className="publication-title">{publication.title}</h3>
        <p className="publication-authors">{publication.authors}</p>
        <p className="publication-venue">{publication.venue}</p>
        <div className="publication-links">
          {publication.links.map(([label, href]) => (
            <a key={label} href={href} className="publication-link" target="_blank" rel="noreferrer">
              <span className="publication-link-icon">
                <PublicationIcon label={label} />
              </span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

function PublicationsPage() {
  return (
    <DocShell pageClass="_publications">
      <h1 id="publications" tabIndex="-1">
        Publications <HeaderAnchor id="publications" title="Publications" />
      </h1>
      <h2 id="_2026" tabIndex="-1">
        2026 <HeaderAnchor id="_2026" title="2026" />
      </h2>
      {publications.map((publication) => (
        <PublicationItem key={publication.title} publication={publication} />
      ))}
    </DocShell>
  )
}

function ContactPage() {
  return (
    <DocShell pageClass="_contact">
      <h1 id="contact-us" tabIndex="-1">
        Contact Us <HeaderAnchor id="contact-us" title="Contact Us" />
      </h1>
      <h2 id="address" tabIndex="-1">
        Address <HeaderAnchor id="address" title="Address" />
      </h2>
      <p className="contact-address">
        <strong>Luo Lab</strong>
        <br />
        Southwest Jiaotong University
        <br />
        Chengdu, Sichuan Province
        <br />
        China
      </p>
      <hr />
      <h2 id="email" tabIndex="-1">
        Email <HeaderAnchor id="email" title="Email" />
      </h2>
      <p>
        <strong>Prof. Zhipeng Luo</strong>: luozhipeng@swjtu.edu.cn
      </p>
      <hr />
      <h2 id="prospective-students" tabIndex="-1">
        Prospective Students <HeaderAnchor id="prospective-students" title="Prospective Students" />
      </h2>
      <p>
        We are always looking for motivated students interested in AI for Science, especially for biomedical science. If
        you are interested in joining our lab, please send your CV and research interests to Prof. Luo.
      </p>
      <h3 id="current-openings" tabIndex="-1">
        Current Openings: <HeaderAnchor id="current-openings" title="Current Openings:" />
      </h3>
      <ul>
        <li>Undergraduate students</li>
        <li>Graduate students</li>
        <li>Research assistants (RA)</li>
      </ul>
      <hr />
      <h2 id="collaboration" tabIndex="-1">
        Collaboration <HeaderAnchor id="collaboration" title="Collaboration" />
      </h2>
      <p>We welcome collaborations with researchers in related fields. Please contact Prof. Luo for potential collaboration opportunities.</p>
      <h3 id="current-collaborations" tabIndex="-1">
        Current Collaborations: <HeaderAnchor id="current-collaborations" title="Current Collaborations:" />
      </h3>
      <ul>
        <li>
          <strong>West China Hospital, Sichuan University</strong> - Prof. Yazhou He's team
        </li>
      </ul>
    </DocShell>
  )
}

function NotFoundPage() {
  return (
    <DocShell pageClass="_404">
      <h1 id="not-found" tabIndex="-1">
        404 <HeaderAnchor id="not-found" title="404" />
      </h1>
      <p>Page not found.</p>
    </DocShell>
  )
}

function App() {
  const [pathname, setPathname] = usePathname()

  const Page = useMemo(() => {
    switch (pathname) {
      case '/':
      case '/index.html':
        return HomePage
      case '/research.html':
        return ResearchPage
      case '/team.html':
        return TeamPage
      case '/publications.html':
        return PublicationsPage
      case '/contact.html':
        return ContactPage
      default:
        return NotFoundPage
    }
  }, [pathname])

  useEffect(() => {
    document.title = pageTitles[pathname] ?? 'Luo Lab'
  }, [pathname])

  return (
    <div className="Layout" data-v-5d98c3a5>
      <Header pathname={pathname} setPathname={setPathname} />
      <LocalNav />
      <Page />
      <AppFooter />
    </div>
  )
}

const rootElement = document.getElementById('root')
const root = window.__LUO_LAB_ROOT__ ?? createRoot(rootElement)
window.__LUO_LAB_ROOT__ = root
root.render(<App />)
