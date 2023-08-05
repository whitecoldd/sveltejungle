<script>
	import forestBg from '$lib/assets/forest-bg.webp';
	import forestLeft from '$lib/assets/forest-left.webp';
	import forestRight from '$lib/assets/forest-right.webp';
	import chevy from '$lib/assets/chevron-down.svg';
	import { onMount } from 'svelte';
	import SplitType from 'split-type';
	import { timeline, stagger } from 'motion';

	let text;
	let bg;
	let left;
	let right;
	let btn;
	let headText;
	let blocker;

	onMount(() => {
		const splitText = new SplitType(text, { lineClass: 'overflow-hidden -my-14' });
		const splitHeadText = new SplitType(headText, { lineClass: 'overflow-hidden' });
		const bgAnimate = [bg, { scale: [1.15, 1] }, { duration: 2, at: '<' }];
		const leftAnimate = [left, { x: ['-100%', '0%'] }, { duration: 2, at: '<' }];
		const rightAnimate = [right, { x: ['100%', '0%'] }, { duration: 2, at: '<' }];
		const btnAnimate = [btn, { y: ['100%', '0%'] }, { duration: 1, at: '-1' }];
		const animateText = [
			splitText.words,
			{ y: ['100%', '0%'] },
			{ delay: stagger(0.1), duration: 1, easing: [0.62, -0.01, 0.37, 0.99], at: '-0.7' }
		];
		const revealHeadText = [headText, { opacity: 1 }, { duration: 0 }];
		const animateHeadTextIn = [
			splitHeadText.words,
			{ y: ['100%', '0%'] },
			{ delay: stagger(0.1), duration: 1 }
		];
		const animateHeadTextOut = [
			splitHeadText.words,
			{ y: ['-100%'] },
			{ delay: stagger(0.1), duration: 1, at: '+0.1' }
		];
		const animateBlocker = [blocker, { y: ['-100%'] }, { duration: 1, at: '-0.35' }];
		timeline(
			[
				revealHeadText,
				animateHeadTextIn,
				animateHeadTextOut,
				animateBlocker,
				animateText,
				bgAnimate,
				leftAnimate,
				rightAnimate,
				btnAnimate
			],
			{
				defaultOptions: { ease: [0.52, 0.05, 0.22, 0.95] }
			}
		);
	});
</script>

<div
	class="h-screen w-full flex items-center justify-center bg-primary-400 relative overflow-hidden"
>
	<h1 bind:this={text} class="font-medieval text-huge text-center text-light-100 z-20">
		Welcome <br /> to the <br /> jungle
	</h1>
	<div class="absolute w-full h-full">
		<div class="h-full w-full absolute bg-fade" />
		<img bind:this={bg} src={forestBg} alt="forest" class="blur-sm h-full w-full object-cover" />
	</div>
	<div class="absolute inset-0 overflow-hidden h-full w-2/5 flex items-center z-30 blur">
		<img bind:this={left} src={forestLeft} alt="left" class="w-full min-h-full object-cover" />
	</div>
	<div class="absolute top-0 right-0 overflow-hidden h-full w-2/5 flex items-center z-30 blur">
		<img bind:this={right} src={forestRight} alt="right" class="w-full min-h-full object-cover" />
	</div>
	<button bind:this={btn} class="absolute -bottom-14 rounded-full p-4 border border-light-100">
		<div class="rounded-full px-4 py-10 bg-brown-300 flex items-center justify-center">
			<img src={chevy} alt="chevy" class="w-8 h-8" />
		</div>
	</button>
	<div class="z-50 fixed h-screen w-screen">
		<div
			bind:this={blocker}
			class="absolute bg-primary-400 w-full h-full flex items-center justify-center"
		>
			<span
				bind:this={headText}
				class="font-medieval text-center text-3xl text-light-100 relative opacity-0"
			>
				maybe next time
			</span>
		</div>
	</div>
</div>
