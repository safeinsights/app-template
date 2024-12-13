import { css } from '../../styled-system/css'
import { Title } from '@mantine/core'

const pageStyles = css({
    display: 'grid',
    gridTemplateRows: '1fr 20px',
    alignItems: 'center',
    justifyItems: 'center',
    minHeight: '100svh',
    padding: 3,
    gap: '6px',
    fontSynthesis: 'none',
})

const mainStyles = css({
    display: 'flex',
    flexDirection: 'column',
    fontSize: 20,
    fontWeight: 'bold',
    gap: 32,
})

const footerStyles = css({
    fontSize: '80%',
    fontStyle: 'oblique',
})

export default function Home() {
    return (
        <div className={pageStyles}>
            <main className={mainStyles}>
                <Title>Hello World</Title>
            </main>
            <footer className={footerStyles}>A SafeInsights production</footer>
        </div>
    )
}
