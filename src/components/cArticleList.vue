<template>
	<div class="articleList">
		<div 
			class="article"
			v-for="(article, key) in getArticleList"
			:key="key"
		>
			<div class="article__section">
				<a 
					:href="article.link" 
					target="_blank" 
					class="article__title"
				> {{ article.title }} </a>
				<div class="article__date">{{ convertDate(article.date) }}</div>
			</div>
			<div class="article__section">
				<div class="article__data-list">
					<div 
						class="article__data"
						v-for="(tech, techKey) in article.techList"
						:key="techKey"
					>
						<a href="#" class="article__data-title">
							{{ tech.title }}
						</a>
						<div class="article__data-version">
							{{ tech.version }}
						</div>
					</div>
				</div>
				<div class="article__data-list">
					<div 
						class="article__data"
						v-for="(term, termKey) in article.termList"
						:key="termKey"
					>
						<div class="article__data-hovered">
							<a href="#" class="article__data-title">
								{{ term.title }}
							</a>
							<div class="article__data-hovered-tip" v-if="term.description">
								{{ term.description }}
							</div>
						</div>
					</div>
				</div>
				<div class="article__actual">
					<div 
						class="article__actual-sight"
						:class="'article__actual-sight--' + ( article.isActual == 1 ? 'actual' : 'notactual' )"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex';

	export default{
		name: 'cArticleList',
		computed: {
			...mapGetters([
				'getArticleList',
				'getTechList',
				'getTermList',
			])		
		},
		methods: {
			convertDate: function ( date ){
				let newDate = new Date(...date.split('-'));
				var dd = newDate.getDate();
				if (dd < 10) dd = '0' + dd;

				var mm = newDate.getMonth() + 1;
				if (mm < 10) mm = '0' + mm;

				var yy = newDate.getFullYear();
				if (yy < 10) yy = '0' + yy;

				return dd + '.' + mm + '.' + yy;
			}
		}
	}
</script>