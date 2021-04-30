<template>
	<div>
		<div class="panels" ref="box">
			<div class="panel panel1">
				<p>Hey</p>
				<p>Let's</p>
				<p>Dance</p>
			</div>
			<div class="panel panel2">
				<p>Give</p>
				<p>Take</p>
				<p>Receive</p>
			</div>
			<div class="panel panel3">
				<p>Experience</p>
				<p>It</p>
				<p>Today</p>
			</div>
			<div class="panel panel4">
				<p>Give</p>
				<p>All</p>
				<p>You can</p>
			</div>
			<div class="panel panel5">
				<p>Life</p>
				<p>In</p>
				<p>Motion</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'demo',
	data() {
		return {
			theme: '',
		};
	},
	methods: {
		change(e) {
			const panels = document.getElementsByClassName('panel');

			panels.forEach((panel) =>
				panel.addEventListener('click', toggleOpen)
			);
			panels.forEach((panel) =>
				panel.addEventListener('transitionend', toggleActive)
			);

			function toggleOpen() {
				this.classList.toggle('open');
			}

			function toggleActive(e) {
				// 因为浏览器的差异，有的浏览器显示 flex，有的浏览器显示 flex-grow，因此使用 includes()
				if (e.propertyName.includes('flex')) {
					this.classList.toggle('open-active');
				}
			}
		},
	},
	mounted() {
		this.change();
	},
};
</script>
</script>