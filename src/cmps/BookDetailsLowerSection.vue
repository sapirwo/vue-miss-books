<template>
  <section class="lower-section-details">
    <h1>Details</h1>
    <div class="details-section">
      <h5
        class="author-name"
        v-for="(author, idx) in currBook.authors"
        :key="idx"
      >
        {{ author }}<span v-if="idx != currBook.authors.length - 1">,</span>
      </h5>
      <h4>
        Publish date: <span>{{ currBook.publishedDate }}</span>
      </h4>
      <h4>
        Number of pages: <span>{{ currBook.pageCount }}</span>
      </h4>
      <h4>
        Language: <span>{{ currBook.language }}</span>
      </h4>
    </div>
    <div class="description-section">
      <h5>Description</h5>
      <p>
        {{
          currBook.description[0].toUpperCase() +
          currBook.description.substring(1)
        }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "BookDetailsLowerSection",
  props: ["currBook"],
};
</script>
