<!--
  SPDX-FileCopyrightText: 2024 Manuel Quarneti <manuelquarneti@protonmail.com>
  SPDX-License-Identifier: GPL-3.0-only
-->

<script lang="ts">
import robin from "roundrobin";

let people = 10;

$: matrix = robin(people);

$: totalTimeWith5min = matrix.length * 5;
$: totalTimeWith10min = matrix.length * 10;
</script>

<h1>⏱️❤️‍🔥🏳️‍🌈 Speeddate al prom</h1>

<hr />

<p>🔢 Quanti siamo?</p>
<input type="number" bind:value={people} min="2" max="100" />

<hr />

<p>
  ⏱️ Tempo totale con 5 minuti a coppia: {totalTimeWith5min} minuti
  <br />
  ⏱️ Tempo totale con 10 minuti a coppia: {totalTimeWith10min} minuti
</p>

<hr />

<div class="overflow-auto">
  <table class="striped">
    <tbody>
      {#each matrix as round}
        <tr>
          {#each round as couple}
            <td><kbd>{couple}</kbd></td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
