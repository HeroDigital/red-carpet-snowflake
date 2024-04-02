/**
 * decorates the header, mainly the nav
 * @param {Element} block The incoming block element
 */
export default async function decorate(block) {
  if (block) {
    block.innerHTML = `
      <a href="https://www.snowflake.com/contact/" data-testid="button-external" role="button" class="nav_contact contact snowflake-button-container" tabindex="0" target="_self" rel="noreferrer">contact</a>
      <a href="https://signup.snowflake.com/?utm_cta=trial-en-www-homepage-top-right-nav-ss-evg&amp;_ga=2.74406678.547897382.1657561304-1006975775.1656432605&amp;_gac=1.254279162.1656541671.Cj0KCQjw8O-VBhCpARIsACMvVLPE7vSFoPt6gqlowxPDlHT6waZ2_Kd3-4926XLVs0QvlzvTvIKg7pgaAqd2EALw_wcB" data-testid="button-external" role="button" class="nav_start_for_free start_for_free snowflake-button-container" tabindex="0" target="_self" rel="noreferrer">start for free</a>
`;
  }
}

