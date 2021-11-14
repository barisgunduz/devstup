<template>
	<div id="number-stats" class="stats-box">
		<div class="box">
			<h4>Stats</h4>
			<h5>Achievments</h5>
		</div>
		<div class="box">
			<div class="counter">{{ skills }}</div>
			<h6>Skills</h6>
		</div>
		<div class="box">
			<div class="counter">{{ clients }}</div>
			<h6>Clients</h6>
		</div>
		<div class="box">
			<div class="counter">{{ projects }}</div>
			<h6>Projects</h6>
		</div>
	</div>
</template>

<script>
export default {
    data(){
        return {
            skills : 9,
            clients : 121,
            projects: 245
        }
    }
};
</script>

<style></style>
