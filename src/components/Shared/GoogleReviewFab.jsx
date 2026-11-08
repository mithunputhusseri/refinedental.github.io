import React from 'react';
import './GoogleReviewFab.css';

const GOOGLE_REVIEWS_URL =
	'https://www.google.com/search?sa=X&authuser=1&sca_esv=f4e906d73ecb274c&biw=1280&bih=551&sxsrf=AKL5yDh33r8VW5KhbJTr0IZd7tkW_egDsQ:1794162284563&q=refine+dental+%26+facial+aesthetic+centre+bengaluru+reviews&si=AE1YtOqiKPb2pdLXAi8quZ9vbH4aVq_aX8-3H9iFBLpRNK95c63f60jLxcK7RzvbHqKnVAQpJQQfN30PFDzY9rOuQFlO4TI8D19JVY2BkI6lmdGd8LIGmsLA7KNfdh_uPfHKT-MaCpol4EoXi6B1fHk0Gy7qf8YDIRhQam2miYsSFDLiVbm7cfSyOsrsyJb47wd5Bj6IN6T9&ved=2ahUKEwiV3Y-t__iXAxUwqFYBHY6bBMEQyNoBKAB6BAgcEAA&ictx=1';

const GoogleReviewFab = () => (
	<a
		className="google-review-fab"
		href={GOOGLE_REVIEWS_URL}
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Read our Google reviews"
		title="Google Reviews"
	>
		<span className="google-review-fab__icon" aria-hidden="true">
			<svg viewBox="0 0 48 48" focusable="false">
				<path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.876 32.658 29.248 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c2.877 0 5.512 1.01 7.576 2.684l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
				<path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 16.108 19.004 13 24 13c2.877 0 5.512 1.01 7.576 2.684l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
				<path fill="#4CAF50" d="M24 44c5.141 0 9.86-1.97 13.409-5.186l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.52 5.02C9.505 39.556 16.227 44 24 44z" />
				<path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 41.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
			</svg>
		</span>
		<span className="google-review-fab__copy">
			<span className="google-review-fab__text">Reviews</span>
			<span className="google-review-fab__stars" aria-hidden="true">
				★★★★★
			</span>
		</span>
	</a>
);

export default GoogleReviewFab;
