<script>
	import { browser } from '$app/environment';
	import cityBg from '$lib/assets/nightcitybg.webp';
	import chevy from '$lib/assets/chevron-down.svg';

	import { timeline, stagger, spring, animate } from 'motion';
	import { onMount } from 'svelte';

	let text2;
	let bg;
	let left;
	let right;
	let btn;
	let bang;
	let blocker;
	if (browser) {
		setInterval(() => {
			animate(
				text2,
				{
					color: ['#fff', '#000'],
					filter: ['drop-shadow(0px 0px 0px #FFA500)', 'none']
				},
				{
					duration: 0.2,
					repeat: 2
				}
			);
		}, 12000);
		setInterval(() => {
			const btnAnimateUp = [btn, { y: ['0%', '-20%'] }, { duration: 0.3, delay: stagger(3) }];
			const btnAnimateDown = [btn, { y: ['-20%', '0%'] }, { duration: 0.1, easing: spring() }];
			timeline([btnAnimateUp, btnAnimateDown]);
		}, 1000);
	}
	onMount(() => {
		const animateLeft = [left, { x: ['-1000px', '0px'] }, { duration: 1.5, easing: 'ease' }];
		const animateRight = [
			right,
			{ x: ['1000px', '0px'] },
			{ duration: 1.5, easing: 'ease', at: '<' }
		];
		const animateBg = [bg, { scale: [1.15, 1] }, { duration: 2 }];
		const animateBlocker = [blocker, { opacity: [1, 0] }, { duration: 1 }];
		const animateBang1 = [
			bang,
			{ width: ['0%', '150%'] },
			{ duration: 1, easing: [0.17, 0.67, 0.83, 0.67] }
		];
		const animateBang2 = [
			bang,
			{ height: ['0%', '250%'] },
			{ duration: 1, easing: [0.17, 0.67, 0.83, 0.67], at: '<' }
		];
		timeline([animateLeft, animateRight, animateBang1, animateBang2, animateBlocker, animateBg]);
	});
</script>

<div
	class="h-screen w-full flex items-center justify-center bg-primary-400 relative overflow-hidden"
>
	<div class="py-1 px-3 z-20">
		<h1 class="font-neon text-mobile lg:text-huge text-center text-light-100 z-20">
			<span class="text-white drop-shadow-neon">white</span>
			<span class="text-white drop-shadow-flame">cold</span><span
				bind:this={text2}
				class="text-white drop-shadow-flame">d</span
			>
		</h1>
	</div>
	<div class="absolute w-full h-full">
		<div class="h-full w-full absolute bg-fade" />
		<img bind:this={bg} src={cityBg} alt="forest" class="blur-sm h-screen w-full object-cover" />
	</div>
	<!-- <div class="absolute top-0 left-0 overflow-hidden h-full w-2/5 flex items-center z-30">
		<img bind:this={left} src={forestLeft} alt="left" class="w-full min-h-full object-cover" />
	</div>
	<div class="absolute top-0 right-0 overflow-hidden h-full w-2/5 flex items-center z-30 blur">
		<img bind:this={right} src={forestRight} alt="right" class="w-full min-h-full object-cover" />
	</div> -->
	<button bind:this={btn} class="absolute -bottom-2">
		<div class="px-4 py-4 bg-flame-200 drop-shadow-flame flex items-center justify-center">
			<img src={chevy} alt="chevy" class="w-8 h-8 drop-shadow-white" />
		</div>
	</button>
	<div class="z-40 fixed h-screen w-screen">
		<div
			bind:this={blocker}
			class="absolute bg-black w-full h-full flex items-center justify-center"
		>
			<div
				bind:this={left}
				class="rounded-full w-3 h-3 bg-flame-100 translate-x-1/2 drop-shadow-flameobj blur-sm"
			/>
			<div
				bind:this={right}
				class="rounded-full w-3 h-3 bg-neon-100 -translate-x-1/2 drop-shadow-neonobj blur-sm"
			/>
			<div bind:this={bang} class="bg-white rounded-full fixed z-50 h-0 w-0" />
		</div>
	</div>
</div>
