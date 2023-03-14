import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../src/utils/createEmotionCache'
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	const theme = createTheme({
		typography: {
			h1: {
				fontFamily: [
					'Heebo', 'sans-serif'
				].join(','),
				fontWeight: 700,
				fontSize: '45px',
				lineHeight: '57px'
			},
			h2: {
				fontFamily: [
					'Heebo', 'sans-serif'
				].join(','),
				fontWeight: 700,
				fontSize: '40px',
				lineHeight: '49px'
			},
			h4: {
				fontFamily: [
					'Heebo', 'sans-serif'
				].join(','),
				fontWeight: 500,
				fontSize: '18px',
				lineHeight: '21px'
			},
			subtitle1: {
				fontFamily: [
					'Heebo', 'sans-serif'
				].join(','),
				fontWeight: 300,
				fontSize: '18px',
				lineHeight: '26.44px'
			},
			subtitle2: {
				fontFamily: [
					'Heebo', 'sans-serif'
				].join(','),
				fontWeight: 400,
				fontSize: '14px',
				lineHeight: '24px'
			},
			body1: {
				fontFamily: [
					'Heebo', 'sans-serif'
				].join(','),
				fontWeight: 400,
				fontSize: '16px',
				lineHeight: '24px'
			}
		},
		palette: {
			background: {
				default: "#FFFFFF"
			}
		}
	})

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
}