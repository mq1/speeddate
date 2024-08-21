<!--
  SPDX-FileCopyrightText: 2024 Manuel Quarneti <manuelquarneti@protonmail.com>
  SPDX-License-Identifier: GPL-3.0-only
-->

<script lang="ts">
  import { getMatrix } from "./lib/helpers";

  let people = 10;

  $: matrix = getMatrix(people);

  $: totalTimeWith5min = matrix.length * 5;
  $: totalTimeWith10min = matrix.length * 10;
</script>

<h1>⏱️❤️‍🔥🏳️‍🌈 Speeddate al prom</h1>

<hr>

<p>🔢 Quanti siamo?</p>
<input type="number" bind:value={people} min="2" max="20" />
<p>
  ⚠️ Con i numeri dispari fa cagare
  <br>
  ⚠️ Con i numeri alti si inchioda ma prima o poi va
</p>

<hr>

<p>
  ⏱️ Tempo totale con 5 minuti a coppia: {totalTimeWith5min} minuti
  <br>
  ⏱️ Tempo totale con 10 minuti a coppia: {totalTimeWith10min} minuti
</p>

<hr>

<ul>
  {#each matrix as round}
    <li>
      {#each round as couple}
        <kbd>{couple}</kbd> &nbsp;
      {/each}
    </li>
  {/each}
</ul>
