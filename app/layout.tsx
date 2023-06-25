import StoreProvider from './redux/StoreProvider'
import Footer from './components/Footer'
import Header from './components/Header'
import { roboto } from './services/fonts'
import './globals.css'

export const metadata = {
  title: 'Билетопоиск',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <StoreProvider>
        <body className={roboto.className}>
          <div id="modal"></div>
          <div className='page-container'>
            <div className='header-main-container'>
              <Header />
              <main className="main">
                <div className="main-container">
                  {children}
                </div>
              </main>
            </div>
            <Footer />
          </div>
        </body>
      </StoreProvider>
    </html>
  )
}
